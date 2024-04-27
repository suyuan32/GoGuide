---
order: 6
title: NAT
head:
  - - meta
    - name: keywords
      content: NAT, Network Address Translation
---

Translate to English:

## Introduction

The Network Address Translation (NAT) protocol is mainly used for mutual conversion between Wide Area Network (WAN) IP addresses and Local Area Network (LAN) IP addresses.

::: details
A home router has a WAN IP address, and all other devices connected to the router share this WAN IP address. At this time, the NAT protocol needs to be used for conversion.
:::

::: important Private Network Segments

| Network Type | Range                        |
| ------------ | ---------------------------- |
| Class A      | 10.0.0.0～10.255.255.255     |
| Class B      | 172.16.0.0～172.31.255.255   |
| Class C      | 192.168.0.0～192.168.255.255 |

These three network segments are private network segments, used for internal LAN use.
:::

## Working Principle

@startuml
node Router
node HostA
node HostB
node HostC
node Server

note left of HostA: 192.168.50.2
note left of HostB: 192.168.50.3
note left of HostC: 192.168.50.4
note left of Router: Intranet 192.168.50.1 Internet 113.112.111.110
note left of Server: 133.133.133.133

HostA -- Router
HostB -- Router
HostC -- Router
Router -- Server
@enduml

As shown in the above diagram, when Host A sends a packet to the server, the router will convert the source IP `192.168.50.2` to `113.112.111.110`, and then send it to the server `133.133.133.133` on port 80. When the server returns data, it needs to convert the target address back to the intranet address.

::: info Conversion Process

- When Host A sends a request packet, a random port number such as `8888` is assigned to the request, that is, the request source is `192.168.50.2:8888`
- When the request reaches the router, the router will also assign a port to the request, such as `9999`, and change the source IP address of the request to `113.112.111.110`, the final request source address is `113.112.111.110:9999`, the router will save this mapping to the **NAT conversion table**: `192.168.50.2:8888 -- 113.112.111.110:9999`.
- The target address of the data packet returned by the server is `113.112.111.110:9999`. When the data packet reaches the router, the router will convert the request target address to `192.168.50.2:8888` according to the records in the conversion table and send the data packet to the intranet host.
  
:::

## Advantages of NAT

- Network Security: The NAT protocol shares a unified IP address for all network devices in the intranet, preventing intranet hosts from being directly exposed to the public network, which can enhance the security of intranet hosts.
- Load Balancing: The NAT protocol can redirect external requests to different hosts internally, achieving load balancing.
- Save IP Addresses: We know that IPV4 addresses are limited, and the NAT protocol allows a large number of intranet devices to connect to the internet, greatly alleviating the problem caused by the shortage of IPV4 addresses.

## Disadvantages of NAT

- Internal Shielding: External servers cannot directly access intranet devices
- Performance Loss: Router maintenance of the NAT conversion table has performance loss
- Link Loss: If the router restarts, all TCP connections will be disconnected

::: warning Solution
The emergence of the IPV6 protocol can make up for the shortcomings of NAT and is the main application in the future.
:::