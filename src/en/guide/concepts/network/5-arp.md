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

### Packet Format

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