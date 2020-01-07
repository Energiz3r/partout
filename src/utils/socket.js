import { store } from '../stores/store';
import { socket } from './handlers/client'; //the socket library is called within this file
import { onDefaultChannel, onDefaultChannelsFinished } from './handlers/handleChannelLists';
import onChatMessage from './handlers/onChatMessage';
import { onRemoveUser, onReceiveUser } from './handlers/handleUserLists';
import onDisconnect from './handlers/onDisconnect';
import onConnect from './handlers/onConnect';
import onLoginRestore from './handlers/onLoginRestore';
import {
  setPing,
  setDisconnectionReason
} from '../actions/actions';
import { socketEnabled } from './handlers/client';
import log from './log'

//
// set up the socket event handlers
//
const setUpSocketHandlers = () => {
  if (socketEnabled) {

    socket.on('login restore', (loginObject) => {
      onLoginRestore(loginObject);
    });

    socket.on('user', ({ user, channel }) => {
      onReceiveUser(user, channel);
    });

    socket.on('remove user', (userId) => {
      onRemoveUser(userId);
    });

    socket.on('chat message', (msg) => {
      onChatMessage(msg);
    });

    socket.on('default channel', (channel) => {
      onDefaultChannel(channel);
    });

    socket.on('default channels finished', () => {
      onDefaultChannelsFinished();
    });

    // handle pongs from the server
    socket.on('pong', (ms) => { //the pong event automatically has the ping in ms passed in by socket.io
      store.dispatch(setPing(ms));
    });

    // handle connections - check if already connected before adding an intial connection listener
    if (socket.connected) {
      onConnect(socket, false);
    } else {
      socket.on('connect', () => {
        socket.removeListener('connect'); //only do this once - otherwise on 'reconnect' this will be called again
        onConnect(socket, false);
      });
    }    
    socket.on('reconnect', () => {
      log('there was a reconnection')
      onConnect(socket, true);
    });

    // handle disconnections

    socket.on('disconnect', (reason) => {
      if (reason == "transport close") {
        reason = "socket closed by server"; //niceify some of the known errors
      }
      onDisconnect(reason);
    });
    socket.on('connect_timeout', () => {
      onDisconnect("connection timed out");
    });
    socket.on('connect_error', () => {
      onDisconnect("error establishing connection");
    });
    socket.on('error', (error) => {
      store.dispatch(setDisconnectionReason("error: " + error)); //don't trigger a disconnected state in the UI because this may not actually result in disconnection
    });
    socket.on('reconnect_attempt', (number) => {
      store.dispatch(setDisconnectionReason("reconnecting, attempt " + number + "..."));
    });
    socket.on('reconnecting', (number) => { //what's the difference between this and reconnect_attempt? apparently nothing
      store.dispatch(setDisconnectionReason("reconnecting, attempt " + number + "..."));
    });
    socket.on('reconnect_error', (error) => {
      if (error == "Error: xhr poll error") {
        error = "could not find server";
      }
      onDisconnect("reconnect error: " + error);
    });
    socket.on('reconnect_failed', () => {
      onDisconnect("could not reconnect");
    });

  } else {
    setTimeout(setUpSocketHandlers, 500)
  }
}

setTimeout(setUpSocketHandlers, 500)
