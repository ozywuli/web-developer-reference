---
title: 'What is a proxy?'
date: 03-28-2018
---

- Proxy is an intermediary
- A proxy server handles incoming requests and directs them to another server
- A proxy server can be used to circumvent firewalls or to block access to content
- Sits in front of the client

  
## What is a proxy server?

- A **reverse proxy** sits in front of the origin web servers and forwards client requests to those web servers
- If you want to run Apache and Nginx on the same server, you can use Apache to handle certain requests and then route other requests to Nginx. In this case, Apache is the P.O. box.
- Uses
    - load balancing
    - Defense against attacks like DDoS. Prevent attackers from targeting the IP of origin(s) servers
    - Provide a CDN
    - Caching
    - Free up resources for SSL encryption

## References

[https://whatismyipaddress.com/proxy-server](https://whatismyipaddress.com/proxy-server)
[https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)
[https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-18-04-server](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-18-04-server)