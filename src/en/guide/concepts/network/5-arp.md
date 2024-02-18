---
order: 5
title: ARP
---

## Introduction

The **Address Resolution Protocol (ARP)** is an important protocol in IPv4 that is used to determine the MAC address of a target device based on its IP address, ensuring the correct delivery of data.

::: tip MAC Address
The Media Access Control Address (MAC) is also known as the hardware address, which uniquely identifies network devices such as network cards and routers. The MAC address is 48 bits long, with the first 24 bits managed by IEEE and the last 24 bits managed by hardware vendors. Unlike the dynamic allocation of IP addresses, MAC addresses are generally written into firmware or hardware and cannot be modified.

> MAC: `FF-FF-FF-FF-FF-FF` is the reserved broadcast address.

::: details Structure of MAC Address

| Bits           | Meaning                                        |
| -------------- | ---------------------------------------------- |
| 1st bit        | Unicast address (0)/Multicast address (1)      |
| 2nd bit        | Global address (0)/Local address (1)           |
| 3rd-24th bits  | Managed by IEEE and guaranteed to be unique    |
| 25th-48th bits | Managed by vendors and guaranteed to be unique |

:::

## ARP Packet

<table style="text-align:center;">
    <tbody>
        <tr>
            <th>Length (bits)</th>
            <th>48</th>
            <th>48</th>
            <th>16</th>
            <th>16</th>
            <th>16</th>
            <th>8</th>
            <th>8</th>
            <th>16</th>
            <th>48</th>
            <th>32</th>
            <th>48</th>
            <th>32</th></tr>
        <tr>
            <td>
                <b>Data Type</b>
            </td>
            <td>Destination Ethernet Address</td>
            <td>Source Ethernet Address</td>
            <td>Frame Type</td>
            <td>Hardware Type</td>
            <td>Protocol Type</td>
            <td>Hardware Address Length</td>
            <td>Protocol Address Length</td>
            <td>Operation Code</td>
            <td>Source Hardware Address</td>
            <td>Source Protocol Address</td>
            <td>Destination Hardware Address</td>
            <td>Destination Protocol Address</td></tr>
        <tr>
            <td>
                <b>Composition</b>
            </td>
            <td colspan="3">14 bytes Ethernet header</td>
            <td colspan="9">28 bytes ARP request/response</td></tr>
    </tbody>
</table>

::: tip


| Field                    | Length  | Description                                                                                                              |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| Ethernet destination MAC | 48 bits | Ethernet destination MAC address. This field in an ARP Request packet is the broadcast address `0xffff-ffff-ffff`        |
| Ethernet source MAC      | 48 bits | Ethernet source MAC address.                                                                                             |
| Frame type               | 16 bits | Data type. The value of this field is `0x0806` for an ARP Request or Reply packet                                        |
| Hardware type            | 16 bits | Type of the hardware address. The value of this field is 1 for an Ethernet.                                              |
| Protocol type            | 16 bits | Type of the protocol address to be mapped on the sender. The value of this field is `0x0800` for an IP address.          |
| Hardware address length  | 8 bits  | Hardware address length. The value of this field is `6` for an ARP Request or Reply packet.                              |
| Protocol address length  | 8 bits  | Protocol address length. The value of this field is `4` for an ARP Request or Reply packet.                              |
| OP                       | 16 bits | Operation type. The values are as follows: 1: ARP Request packet 2: ARP Reply packet                                     |
| Source MAC               | 48 bits | Source MAC address. The value of this field is the same as the Ethernet source MAC address in the Ethernet frame header. |
| Source IP                | 32 bits | Source IP address                                                                                                        |
| Destination MAC          | 48 bits | Destination MAC address. The value of this field in an ARP Request packet is `0x0000-0000-0000`                          |
| Destination IP           | 32 bits | Destination IP address                                                                                                   |

:::

## Working Principle

In network devices that support the TCP/IP protocol, each maintains an ARP cache table. The cache table stores the mapping relationship of IP addresses, in the format `IP - MAC address - Time to Live (TTL)`, where the default value of `TTL` is 20 minutes.

::: tip Example

Suppose there are the following devices in the local area network:

| Host Name | IP Address    | MAC Address       |
| --------- | ------------- | ----------------- |
| A         | 192.168.50.00 | 00-AA-00-10-A2-00 |
| B         | 192.168.50.01 | 00-BB-00-10-B2-00 |
| C         | 192.168.50.02 | 00-CC-00-10-C2-00 |
| D         | 192.168.50.03 | 00-DD-00-10-D2-00 |
| E         | 192.168.50.04 | 00-EE-00-10-E2-00 |

If A (192.168.50.00) sends data to D (192.168.50.03), the following steps will be executed:

1. If the `ARP` cache table of host `A` contains the `IP` address of host `D`, it will directly get the `MAC` address of host `D` from the cache table, write the `MAC` address into the data frame and send it.
2. If the `ARP` cache table of host `A` does not contain the `IP` address of host `D`, it will broadcast in the network, with the broadcast address. All hosts in the network will receive this broadcast.
3. After receiving the broadcast, host `D` will respond to host `A`, using **unicast** to tell host `A` its `MAC` address. **Other hosts will not respond after receiving the broadcast.** After receiving the response, host `A` can send messages to host `D` and update its own cache table.

::: warning What if the hosts are not in the same local area network?

If host `A` and host `D` are not in the same local area network and are connected through two routers, the router where `A` is located will get the `IP` and `MAC` address of the target subnet router based on the target `IP`. The steps are as follows:

1. Host `A` will first determine whether host `D` is in the same segment. If not in the same segment, host `A` will try to get the MAC address of the default gateway (usually the local router).
2. Host `A` sends data to the router, and the data will be forwarded by the router.
3. Before forwarding the data, the router obtains the `MAC` address of the target router through the `ARP` protocol.
4. The router sends data to the target router, and the target router then sends the data to the host in the target subnet through the `ARP` cache.

:::

::: details What are Reverse Address Resolution Protocol (RARP) and Proxy Address Resolution Protocol (Proxy ARP)?

- Reverse Address Resolution Protocol (RARP)

Reverse Address Resolution Protocol is primarily used to obtain the IP address of a device based on its MAC address. Network devices broadcast their MAC address to a server using the RARP protocol, and the server assigns an IP address to the network device.

- Proxy Address Resolution Protocol (Proxy ARP)

Proxy Address Resolution Protocol is mainly used to enable sub-devices in different network segments that share a router IP to resolve MAC addresses. The sender only needs to send data to the router, and the router forwards the data to the target device using the Proxy ARP protocol.
:::
