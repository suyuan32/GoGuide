---
order: 2
title: "TCP/UDP"
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

::: danger What happens if SYN times out during connection?

::: details
If the client sends a `SYN` command, and drops the line before the server returns the `SYN` command, the server will try to resend the `SYN-ACK` command. Under Linux, the default is to retry 5 times, the interval time starts to double from 1s, i.e., `1s, 2s, 4s, 8s, 16s`, so the timeout time is `1s + 2s + 4s+ 8s+ 16s + 32s = 63s`. After the timeout, TCP will disconnect.
:::