FROM node:alpine
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules
ADD . /opt/app
WORKDIR /opt/app
RUN yarn build
