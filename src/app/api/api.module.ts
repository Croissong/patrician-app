import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { ApolloClient } from 'apollo-client';
import { createNetworkInterface } from 'apollo-phoenix-websocket';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'ws://localhost:4000/socket'
  })
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    ApolloModule.forRoot(provideClient)
  ]
})
export class ApiModule { }
