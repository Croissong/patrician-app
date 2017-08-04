import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { ApolloClient } from 'apollo-client';
import { createNetworkInterface } from 'apollo-phoenix-websocket';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'ws://localhost:4000/socket'
  })
});

const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    inventories(townId:1) {date}
  }

`;

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
export class ApiModule {
  constructor(apollo: Apollo) {
    apollo.watchQuery<{}>({ query: CurrentUserForProfile })
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
