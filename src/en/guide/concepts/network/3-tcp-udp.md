---
order: 3
title: "TCP/UDP"
head:
  - - meta
    - name: keywords
      content: tcp, udp, network, transmission control protocol, user datagram protocol
---
### TCP

Transmission Control Protocol (TCP) is a connection-oriented, reliable, byte-stream-based transport layer communication protocol.

#### TCP Header Structure

![tcp header](/assets/image/article/network/tcp_en.png)

| TCP Header Field      | Description                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source Port           | Sender's port number, range (0~65535)                                                                                                                                                                                                                                                                                                                                                 |
| Destination Port      | Receiver's port number, range (0~65535)                                                                                                                                                                                                                                                                                                                                               |
| Sequence Number       | If the TCP data is too large (greater than the allowable degree of IP packet), it needs to be segmented. This sequence number records the sequence number of each packet, allowing the receiver to reassemble the TCP data. The value of the sequence number field refers to the sequence number of the first byte of data sent by this segment. Abbreviated as `seq`                 |
| Acknowledgment Number | To confirm that the receiver has indeed received the packet data sent out by the sender, when the sender receives this acknowledgment code, it can confirm that the previous packet has been correctly received. This acknowledgment number is the sequence number of the first byte of data from the next segment expected to be received from the other party. Abbreviated as `ack` |
| Header Length         | Indicates the length of the TCP header, range (0~15), unit 32bit, for example, when the value is 5, it means that the header length is 20Byte(160bit), if the option field is empty, then the TCP header length is 20Byte, that is, the value is 5                                                                                                                                    |
| URG                   | `URG=1` indicates that there is urgent data, the last byte of the urgent data is pointed out by the urgent data pointer, generally less used                                                                                                                                                                                                                                          |
| ACK                   | `ACK=1` indicates that the value in the acknowledgment number field is valid, 0 indicates invalid                                                                                                                                                                                                                                                                                     |
| PSH                   | `URG=1` indicates that the urgent pointer field is valid, representing that this packet is an urgent packet. It tells the system that there is urgent data in this segment and should be transmitted as soon as possible (equivalent to high-priority data)                                                                                                                           |
| RST                   | `RSP=1` rebuilds the connection, if the RST bit is received, some errors usually occur                                                                                                                                                                                                                                                                                                |
| SYN                   | `SYN=1` indicates that this is a connection request or connection acceptance message, generally used in the handshake stage                                                                                                                                                                                                                                                           |
| FIN                   | `FIN=1` indicates that the data of the sender of this segment has been sent and requests to release the transport connection                                                                                                                                                                                                                                                          |
| Receive Window        | Used for flow control, indicating the number of bytes the receiver is willing to receive, range `0~65535` bytes                                                                                                                                                                                                                                                                       |
| Checksum              | The checksum covers the entire TCP segment, i.e., the TCP header and TCP data. This is a mandatory field, it must be calculated and stored by the sender, and verified by the receiver                                                                                                                                                                                                |
| Urgent Data Pointer   | When `URG=1` is valid, it is a positive offset, and the sum with the value in the sequence number represents the sequence number of the last byte of urgent data                                                                                                                                                                                                                      |
| Options               | Used when the sender and receiver negotiate the maximum segment length (MSS) (only exists in SYN messages) or used as a window adjustment factor in high-speed network environments, can also store timestamp data                                                                                                                                                                    |

#### TCP State Machine

![TCP Stateful](/assets/image/article/network/tcp_state_en.png)

#### TCP Three-Way Handshake

![TCP Connection](/assets/image/article/network/tcp-connect.png)

::: tip Three-Way Handshake Process
1. The client sends `SYN=1`, and specifies the client's initial sequence number `ISN`, i.e., `x`.
2. The server sends its own `SYN` segment as an acknowledgment, also specifying its own `ISN`, i.e., `y`. To acknowledge the client's `SYN`, it sets `ACK` to `x+1`. In this way, each time a `SYN` is sent, the sequence number will increase by 1. If there is a loss, it will be retransmitted.
3. To acknowledge the server's `SYN`, the client sets `ACK` to `y+1` in the returned value.

:::

::: tip TCP Four-Way Handshake
1. The client sends `FIN=1`, and includes its current sequence number `x+2`. It also includes an `ACK=y+1` to acknowledge the data most recently received from the other side.
2. The server adds 1 to the value `x+2` as the `ACK` sequence number, indicating that the previous packet has been received. At this time, the upper-layer application will be notified that the other end has initiated a shutdown operation, which usually causes the application to initiate its own shutdown operation.
3. The server initiates its own `FIN=1`, `seq=y+1`.
4. The client acknowledges, sends `ACK=y+2` to the server.
:::

::: warning Why is a three-way handshake needed? What is its purpose?

::: details
The process of TCP establishing a connection is the process of synchronizing sequence numbers, SYN (Synchronize Sequence Numbers) is to synchronize sequence numbers. Therefore, the purpose of the three-way handshake is to allow the client (Client) and the server (Service) to obtain each other's sequence number.
:::

::: warning Why is a four-way handshake needed? What is its purpose?

::: details
The reason why a four-way handshake is needed is because TCP is a **full-duplex** protocol, i.e., both the client and the server can actively send messages, so both ends need to send disconnect instructions after the transmission is completed, and need to send `FIN=1` separately to disconnect, and use `ACK` to determine whether the sending was successful.
:::

::: caution What happens if SYN times out during connection?

::: details
If the client sends a `SYN` command, and drops the line before the server returns the `SYN` command, the server will try to resend the `SYN-ACK` command. Under Linux, the default is to retry 5 times, the interval time starts to double from 1s, i.e., `1s, 2s, 4s, 8s, 16s`, so the timeout time is `1s + 2s + 4s+ 8s+ 16s + 32s = 63s`. After the timeout, TCP will disconnect.
:::


#### How does TCP ensure the reliability of transmission?

::: tip TCP ensures the reliability of data transmission through the following features

- Sequence numbers and acknowledgments
- Timeout retransmission
- Flow control
- Congestion control
- Checksum

:::

##### **Sequence numbers and acknowledgment signals**

TCP uses sequence numbers to sort and deduplicate packets, and through the ACK acknowledgment mechanism, it ensures that packets are successfully delivered, ensuring the integrity of the data.

##### **Timeout retransmission**

TCP can retransmit packets until an ACK acknowledgment is received when packets are lost or delayed, through the timeout retransmission mechanism.

::: warning What is RTT? What is RTO?

::: details
RTT stands for Round Trip Time, which refers to the time required for data to be transmitted from the sender to the receiver and back. RTT is used to measure network latency, that is, the total time that data passes through during transmission.

RTO stands for Retransmission Timeout, which refers to the time that the sender waits for acknowledgment (ACK) after sending data in network communication. If the sender does not receive an acknowledgment within the RTO time, it will assume that the data is lost and resend the data.

The calculation of RTO is usually based on the measurement of RTT. The sender estimates the RTO of the next data transmission based on the previous RTT. In general, the value of RTO will be larger than RTT to ensure that data can be successfully retransmitted even in cases of high or unstable network latency.

The calculation method of RTO can vary depending on the specific network protocol or implementation, but its purpose is to ensure the reliable transmission of data to cope with problems such as packet loss, delay, and congestion in the network.
:::

::: warning What is the impact of RTO length on retransmission?

::: details 
If the RTO is too long, the retransmission time will be greatly extended, reducing transmission efficiency. If the RTO is too short, it may lead to frequent retransmissions, exacerbating network congestion, and further triggering more retransmissions.
:::


::: tip Common retransmission mechanisms

::: details

- Timeout retransmission

![timeout retransmission](/assets/image/article/network/timeout-retransmission.png)

There are two situations for timeout retransmission, the timeout caused by the loss of the sent data packet, and the timeout caused by the loss of the returned ACK data packet. Under the timeout retransmission mechanism, a timer is started every time a data packet is sent. If the timer expires, retransmission will be triggered. If the retransmission fails, the next timeout time will be twice the current value. ==The disadvantage of timeout retransmission is that the cycle is long, which may reduce efficiency.==

- Fast retransmission

![tcp](/assets/image/article/network/tcp-3-retry-new.png)

Under the fast retransmission mechanism, after a data packet is lost, the receiving end immediately returns a duplicate acknowledgment packet for each out-of-order packet received, informing the sending end of the missing packet. When the sender receives three duplicate acknowledgment packets, it will immediately retransmit the missing packet.

==Under the fast retransmission mechanism, we can see that the packets `3,4,5` all return `ACK=2`, so we need to retransmit the packets `3,4,5`. Is there a way to not need to retransmit packets `3,4,5`?==

- SACK (Selective Acknowledgment)

![SACK](/assets/image/article/network/sack.png)

The SACK method ([RFC 2018](https://www.ietf.org/rfc/rfc2883.txt)) adds a buffer to the tcp option field to record the transmitted packets, so that the sender can see the packets that have not been successfully transmitted, allowing the sender to only transmit the missing packets without needing to retransmit other packets.

- D-SACK (Duplicate SACK)

D-SACK ([RFC 2883](https://datatracker.ietf.org/doc/html/rfc2018)) mainly solves the problem of ACK loss. D-SACK uses the first segment of SACK as a flag to mark the packets that have been ACKed. When the receiving end receives a duplicate packet, it will write the packet into the D-SACK flag, telling the sender that the packet has been received, and the ACK may have been lost.
:::

##### **Flow Control**

TCP uses a sliding window to control traffic, allowing the sender to control the speed of data transmission based on the receiver's receiving capacity.

::: warning 
The receiver will write the currently available window size into the TCP header when responding with `ACK`, and the sender adjusts the transmission rate based on the window size.
:::

##### **Congestion Control**

::: tip Algorithms
- Slow Start
- Congestion Avoidance
- Fast Retransmit
- Fast Recovery
:::

![Congestion Control](/assets/image/article/network/tcp-congestion-control.png)

::: info Related Terms
- cwnd - Congestion Window
- ssthresh - Slow Start Threshold
:::

::: important

- If `cwnd < ssthresh`, use the Slow Start algorithm.

- If `cwnd > ssthresh`, use the Congestion Avoidance algorithm.

- If `cwnd = ssthresh`, use either the Slow Start or Congestion Avoidance algorithm.
:::

###### **Slow Start**

In the Slow Start phase, the initial value of `cwnd` is `1`, and `cwnd` will double every time a propagation round passes, until it reaches `ssthresh`.

###### **Congestion Avoidance**

When `cwnd` reaches `ssthresh`, the Congestion Avoidance algorithm will be executed. At this time, the growth of `cwnd` changes from doubling to adding `1` every time a propagation round passes. If the sender detects network congestion (i.e., the sent message does not get a timely response), it will set `ssthresh` to half of the `cwnd` value when network congestion occurs, and the value of `cwnd` will be reset to `1`, and Slow Start will be re-executed.

###### **Fast Retransmit and Fast Recovery**

Fast Retransmit has been introduced earlier, that is, if three consecutive duplicate acknowledgments are received, the yet-to-be-received packet segment will be sent immediately. The Fast Recovery algorithm needs to be used in conjunction with the Fast Retransmit algorithm.

::: info Fast Recovery Algorithm
- When the sender receives three consecutive duplicate acknowledgments, it halves `ssthresh`.
- Set `cwnd` to the size of `ssthresh`
:::

##### **Checksum**

TCP will also calculate a checksum for the data to ensure that the data is not lost or erroneous during transmission.

### UDP

UDP, short for User Datagram Protocol, is a connectionless transport layer protocol in the OSI (Open Systems Interconnection) reference model. It provides a simple, unreliable transaction-oriented message delivery service, and its official specification is `IETF RFC 768`.

#### Characteristics

- Connectionless: UDP does not need to establish a connection between the client and the server before transmitting data.
- Fast: Since UDP does not need to handshake or check whether the data has arrived correctly, it can transmit data faster than TCP.
- Unreliability: Once the datagram is sent, it is impossible to know whether it has arrived safely and completely. If the UDP datagram is lost during transmission, it will not be resent.
- Widely used: UDP is used to support network applications that need to transmit data between computers. Many client/server model network applications, including network video conferencing systems, need to use the UDP protocol. For example, many Internet phone services use IP voice (VoIP) usually sent using UDP.

#### Structure

| Field            | Size   | Description                                                           |
| ---------------- | ------ | --------------------------------------------------------------------- |
| Source Port      | 16-bit | Source port number. If all are 0, no reply is allowed                 |
| Destination Port | 16-bit | Destination port number                                               |
| Length           | 16-bit | Length of the UDP user datagram, its minimum value is 8 (header only) |
| Checksum         | 16-bit | Detect whether the data is lost or modified during transmission       |

#### Broadcast Types

| Type      | Description                                                                                                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unicast   | Used for end-to-end communication between two hosts. That is, one-to-one (client and server point-to-point connection)                                                                 |
| Broadcast | Used for a host to communicate with all hosts on the entire LAN. That is, one to all. Broadcasting is prohibited from transmitting on the Internet broadband network (broadcast storm) |
| Multicast | Communicate with a specific group of hosts, not all hosts on the entire LAN. That is, one to a group                                                                                   |

::: warning 
- TCP only supports one-to-one
- UDP multicast is more commonly used, broadcast is only used for LAN
:::

::: info Difference between TCP and UDP

| Feature                             | TCP                 | UDP            |
| ----------------------------------- | ------------------- | -------------- |
| Reliable Transmission               | Yes                 | No             |
| Connection                          | Connection-oriented | Connectionless |
| Data Orderliness                    | Yes                 | Not guaranteed |
| Data Boundary                       | Not preserved       | Preserved      |
| Transmission Speed                  | Relatively slow     | Fast           |
| Flow Control and Congestion Control | Yes                 | No             |
| Protocol Type                       | Heavyweight         | Lightweight    |
| Header Length                       | 20 bytes            | 8 bytes        |

:::

### Common TCP/UDP Attacks

::: warning SYN Flood Attack

The principle of a SYN Flood attack is very simple. It takes advantage of the server's timeout mechanism. When the receiver receives a `SYN` request, it responds with a `SYN + ACK` reply. If the receiver doesn't receive a response to its reply, it retries the connection (learn more about what happens when SYN times out in the TCP three-way handshake and four-way handshake). This creates a half-open connection state. An attacker can exploit this by sending a large number of half-open connection requests from multiple hosts to the server, eventually causing the server's resources to be exhausted and unable to provide services.

> [!tip]
> **How to detect SYN Flood attacks?**
> 1. Increased inbound network traffic: SYN Flood causes a sudden increase in inbound network traffic to the server.
> 2. Decreased network performance: SYN Flood leads to a decline in network performance.
> 3. Numerous SYN half-open connections: SYN Flood generates a large number of half-open connections.
> 4. Unresponsive server: SYN Flood prevents the server from responding to requests.

::: important How to mitigate?

| Defense Measure                        | Description                                                                                                                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Increase maximum half-open connections | Increasing the maximum number of half-open connections allows the server to handle a large number of incoming SYN requests, providing a buffer against flood attempts.                                    |
| Filtering                              | Set up rules in network devices to identify and block malicious SYN requests based on specific patterns or known malicious IP addresses.                                                                  |
| Reduce SYN-RECEIVED timer              | By reducing the time the server waits for an ACK response after sending SYN-ACK, resources allocated to half-open connections can be released more quickly.                                               |
| SYN cache                              | The server uses a cache to store minimal information about each request, minimizing resource consumption.                                                                                                 |
| SYN Cookies                            | The server responds with a SYN-ACK without immediately allocating resources for the connection. Resources are allocated only upon receiving a legitimate ACK response.                                    |
| Load balancer                          | Distribute incoming network traffic across multiple servers, ensuring that no single server becomes the primary target of the attack.                                                                     |
| Firewall and proxy                     | Deploying firewalls and proxies can filter out malicious traffic before it reaches the target server, providing an additional layer of defense.                                                           |
| Honeypots and honeynets                | Honeypots absorb and divert attacks, providing valuable distractions to attackers and protecting critical infrastructure. Honeynets gather threat intelligence by collecting data on attacker strategies. |
| Rate limiting                          | Limiting the rate of incoming connection requests is an important strategy to prevent SYN flood attacks.                                                                                                  |
| Hybrid approaches                      | Combining multiple techniques can create layered defenses against TCP SYN Flood attacks, ensuring that protection remains even if one method fails.                                                       |
| Cloud-based DDoS protection solutions  | Utilizing cloud-based DDoS protection solutions can offload and filter traffic to dedicated platforms capable of handling large-scale attacks.                                                            |

:::

::: warning What is a UDP Flood Attack?

> [!important]
> When a server receives a UDP packet, it performs the following operations:
> 1. Checks if any program is listening on the corresponding port.
> 2. If no program is found, the server responds with an ICMP packet indicating the destination is unreachable.

Therefore, an attacker can overwhelm the server's resources by frequently sending a large number of UDP requests to multiple ports, causing the server to exhaust its resources while handling a large number of responses.

::: details How to mitigate?

One way to mitigate UDP Flood attacks is by limiting the ICMP response time. However, this can also impact legitimate PING requests.
::: 