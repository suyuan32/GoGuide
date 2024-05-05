---
order: 2
title: "IP"
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: IP, Internet Protocol, TCP/IP, IPv4, IPv6, Header
---

## IP

IP (Internet Protocol) and TCP together form the TCP/IP protocol stack, which is one of the core protocols of the Internet.

IP has the following characteristics:

- **Stateless**: It does not store any state information, which means that IP packets can be unordered and duplicated.
- **Connectionless**: It does not require establishing a connection, and both the sender and receiver do not need to store information about each other. The destination IP address needs to be specified for each transmission.
- **Unreliable**: IP cannot guarantee that packets will always be delivered. They may be lost or discarded due to timeouts.

### **IPv4** Structure

![ipv4 header](/assets/image/article/network/ip.png)

::: tip Field Descriptions 

| Field                        | Description                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Version                      | Occupies 4 bits and is used to identify the version number of the IP header. The IPv4 version number is 4.                    |
| Header Length                | Represents the size of the IP header, with a minimum value of 5 (5*4 = 20 bytes) and a maximum value of 15 (15*4 = 60 bytes). |
| Differentiated Services (DS) | Used to represent the type of service. It can be divided into DSCP and ECN (Explicit Congestion Notification).                |
| Total Length                 | Represents the total number of bytes of the IP header and the data section combined.                                          |
| Identification               | Used for fragmentation and reassembly. This field is incremented by 1 for each generated datagram during fragmentation.       |
| Flags                        | Represents the relevant information about packet fragmentation.                                                               |
| Fragment Offset              | Used to identify the position of each segment being fragmented relative to the original data, in units of 8 bytes.            |
| Time to Live (TTL)           | Decreases by one for each router the packet passes through. When it reaches zero, the packet is discarded.                    |
| Protocol                     | The protocol used in the data section of the packet.                                                                          |
| Header Checksum              | Used to check if the packet is damaged.                                                                                       |
| Source Address               | Represents the IP address of the sender.                                                                                      |
| Destination Address          | Represents the IP address of the receiver.                                                                                    |
| Options                      | Additional information.                                                                                                       |
| Data                         | The content of the transmitted data.                                                                                          |


:::

::: details Version Number Corresponding to Digits

| Version | Description                           | Status     |
| ------- | ------------------------------------- | ---------- |
| 0       | Pre-Internet Protocol, before v4      | Reserved   |
| 1–3     | Unassigned                            |            |
| 4       | Internet Protocol version 4 (IPv4)    | Active     |
| 5       | Internet Stream Protocol or ST        | Deprecated |
| 5       | Internet Stream Protocol or ST-II     | Deprecated |
| 6       | Simple Internet Protocol (SIP)        | Deprecated |
| 6       | Internet Protocol version 6 (IPv6)    | Active     |
| 7       | TP/IX Next Generation Internet (IPv7) | Deprecated |
| 8       | P Internet Protocol (PIP)             | Deprecated |
| 9       | TCP and UDP Large Addresses (TUBA)    | Deprecated |
| 10–14   | Unassigned                            |            |
| 15      | Version field reserved value          | Reserved   |

:::

::: details Flags Description
This 3-bit field is used to control and identify fragmentation. They are:
| Bit | Description                |
| --- | -------------------------- |
| 0   | Reserved, must be set to 0 |
| 1   | Don't Fragment (DF)        |
| 2   | More Fragments (MF)        |

::: warning
- **If the DF flag is set to 1 but the route requires the packet to be fragmented, the packet will be discarded.**

- **For fragmented packets, except for the last fragment, the MF flag is set to 1, and the fragment offset field of the last fragment is not 0.**
:::

::: details Common IP Options

- **Security Options**: Used to provide network security functions, such as data encryption, authentication, and access control.

- **Record Route Option**: Enables the IP datagram to record the IP addresses of the routers it passes through in the transmission path, for diagnosing network problems or tracing the path of packets.

- **Loose Source Routing**: Specifies the transmission path of the data packet, requiring the packet to pass through specified intermediate nodes, but allowing other nodes on the path to make certain choices.

- **Strict Source Routing**: Specifies the transmission path of the data packet, requiring the packet to be delivered in the specified node order, and other nodes cannot participate.

- **Timestamp Option**: Inserts timestamp information into the packet to measure the time required for the packet to be transmitted from the source to the destination.

:::

### Fragmentation

::: tip MTU
Maximum Transmission Unit (MTU) refers to the maximum packet size (in bytes) that can be transmitted at the data link layer.
:::

When an `IP` packet is transmitted over a link layer and the packet size exceeds the link layer's `MTU`, the packet needs to be fragmented. The length of each fragment must be less than or equal to the MTU minus the IP header length.

::: important Fragmentation Process
Each fragmented data segment is placed in an independent IP datagram, and the corresponding fields in the datagram need to be modified:

- Modify the total length field to the length of the current fragment.
- Except for the last fragment, set the More Fragments (MF) flag to 1.
- Adjust the fragment offset.
- Recalculate the checksum.

:::

::: details Example

An IP datagram with a header length of `20` bytes and a data payload of `4000` bytes (total length: `4020` bytes) is transmitted over a link with an `MTU` of `2500` bytes. It will be divided into two fragments:

| Total Length | Header | Data | More Fragments (MF)? | DF  | Fragment Offset |
| ------------ | ------ | ---- | -------------------- | --- | --------------- |
| 2500         | 20     | 2480 | Yes                  | 0   | 0               |
| 1540         | 20     | 1520 | No                   | 0   | 310   (2480/8)  |

Similarly, when the MTU becomes smaller, the cut fragments will be further divided.

:::

### Reassembly

::: tip How to Determine if Data is Fragmented?
- DF flag is 0
- Fragment offset field is not 0
:::

The receiver collects the fragments and sorts them based on the offset. Once all the fragments are collected, they are reassembled and submitted to the upper protocol stack.

### IPV6

![IPV6](/assets/image/article/network/comparing-ipv4-and-ipv6-headers.png)

::: tip Differences between IPv4 and IPv6

| Feature                      | IPv4                                           | IPv6                                                                                  |
| :--------------------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Address Length**           | 32 bits, providing about 4.3 billion addresses | 128 bits, providing a vast number of addresses                                        |
| **Address Notation**         | Dotted decimal notation, e.g., 192.168.0.1     | Colon hexadecimal notation, e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334             |
| **Header Length**            | Fixed, 20 bytes                                | Fixed, 40 bytes                                                                       |
| **Quality of Service (QoS)** | Limited native support                         | Native support, including flow labels and flow priorities                             |
| **Security**                 | Requires the use of IPSec                      | Native support for IPSec                                                              |
| **Configuration**            | Manual or DHCP                                 | Manual, automatic (based on link-local addresses and router announcements), or DHCPv6 |
:::

### What is IP Spoofing?

IP spoofing refers to the technique of forging the IP address of a host. An attacker can send a large number of data segments with different IP addresses and the RST flag set to a server, causing the server to disconnect from the host. If other hosts need to access the server, they will need to establish a new connection. Alternatively, the attacker can impersonate another host and establish a connection with the server to steal data.
