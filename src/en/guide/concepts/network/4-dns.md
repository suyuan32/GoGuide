---
order: 4
title: DNS
head:
  - - meta
    - name: keywords
      content: DNS, Domain Name System, DNS resolution, DNS cache, DNS server, DNS record, DNS query, DNS zone, DNSSEC, DNS attack
---

## Introduction

DNS (Domain Name System) is a distributed database used to store the mapping between domain names and IP addresses. It allows users to access target addresses using domain names without needing to remember the IP addresses. The process of obtaining the IP address from a domain name is called **DNS resolution**.

::: tip Steps for accessing a website in a browser
1. Send a domain name request to the DNS server.
2. Obtain the IP address corresponding to the domain name.
3. Send a request to the target website using the IP address.
:::
 
![dns](/assets/image/article/network/dns-example.png)

### DNS Resolution Process

1. **Check local DNS cache**: First, check the browser cache. If the DNS information for the domain name is not cached in the browser, the computer will check the system cache to see if there is any configuration in the Hosts file or cached information for the domain name. If it still doesn't exist, it will check the cache in the router.
2. **ISP cache**: If there is no cache in the local DNS, it will enter the ISP's DNS cache to search. Internet service providers usually cache some DNS information.
3. **Root domain server query**: If the corresponding data is not found in the above two caches, a query request will be sent to the root server. If the domain name belongs to another top-level domain server, the root server will send the IP address of the top-level server to the client. Otherwise, it will directly return the corresponding IP information.
4. **Top-level domain server query**: If the top-level domain server cannot find the record, it will return the IP address of the authoritative domain server within its jurisdiction.
5. **Authoritative domain (primary domain) server query**: If the authoritative domain server still cannot find the information, it will recursively query the next-level server until the result is found.
6. **Save the result**: When the domain server obtains the IP address information, it will return the data to the client, which will cache the IP address information and then send a request to the IP address.

### DNS Record Types

| Record Type | Description                  |
| ----------- | ---------------------------- |
| A           | Host IP address              |
| AAAA        | Host IPv6 address            |
| ALIAS       | Automatically resolved alias |
| CNAME       | Canonical name of an alias   |
| MX          | Mail exchange server         |
| NS          | Name server                  |
| TXT         | Descriptive text             |

## Common DNS Attacks

| Attack Type                         | Description                                                                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS Spoofing/Cache Poisoning        | An attack that introduces forged DNS data into the cache of a DNS resolver, causing the resolver to return incorrect IP addresses.              |
| DNS Tunneling                       | An attack that establishes a tunnel using DNS queries and responses through another protocol.                                                   |
| DNS Hijacking                       | An attack that redirects queries to other domain name servers.                                                                                  |
| NXDOMAIN Attack                     | An attack that attempts to cause a denial of service by flooding a DNS server with requests for non-existent domains.                           |
| Phantom Domain Attack               | An attack that sets up "phantom" domain servers that respond slowly or not at all, causing performance degradation and denial of service.       |
| Random Subdomain Attack             | An attack that sends DNS queries for non-existent subdomains of legitimate sites, causing denial of service.                                    |
| Domain Lock Attack                  | An attack that establishes TCP connections with other legitimate resolvers and sends slow, random packet streams to consume resolver resources. |
| CPE Attack based on Zombie Networks | An attack that uses compromised CPE devices to perform random subdomain attacks against a site or domain.                                       |
