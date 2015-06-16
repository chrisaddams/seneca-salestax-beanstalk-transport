FROM        ubuntu
ENV         DEBIAN_FRONTEND=noninteractive
RUN         apt-get update
RUN         apt-get install -y beanstalkd

EXPOSE      11300
ENTRYPOINT  ["/usr/bin/beanstalkd"]
