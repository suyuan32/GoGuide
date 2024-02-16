---
order: 1
title: "Basic"
---

### OSI Seven-Layer Model

| Layer        | Function                                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Physical     | Mainly implements transparent transmission of bitstreams between adjacent nodes, defines the standards of physical devices, such as the type of network cable, `the network card also works at this layer`.                             |
| Data Link    | Assembles the bit data packets passed down from the network layer into frames and sends frames on the link of adjacent nodes. The data link layer divides the 0,1 sequence into meaningful data frames and sends them to the other end. |
| Network      | Selects the appropriate route and switch node, can timely transmit data, the data of this layer is called data packet, the focus is on IP protocol.                                                                                     |
| Transport    | Provides a general data transmission service to the host process. The protocol that needs to be focused on in the transport layer is TCP protocol and UDP protocol.                                                                     |
| Session      | Responsible for establishing, maintaining and terminating communication between two nodes in the network, common protocols are ADSP, RPC, etc.                                                                                          |
| Presentation | Mainly responsible for data format conversion, solving communication syntax problems between different systems                                                                                                                          |
| Application  | Provides interactive services for applications, the purpose is to make it more convenient for applications to receive data from the network, the focus is on HTTP protocol                                                              |


![osi](/assets/image/article/network/tcpip.png)

### TCP and IP Model

| OSI Seven-Layer Model | TCP/IP Five-Layer Model | TCP/IP Four-Layer Model | Function                                                   | TCP/IP Protocol Suite                    |
| --------------------- | ----------------------- | ----------------------- | ---------------------------------------------------------- | ---------------------------------------- |
| Application           | Application             | Application             | File transfer, email, file service, virtual terminal, etc. | SMTP, DNS, Telnet, TFTP, HTTP, SNHP, FTP |
| Presentation          | Application             | Application             | Data formatting, code conversion, data encryption          | None                                     |
| Session               | Application             | Application             | Dissolve or establish contact with other nodes             | None                                     |
| Transport             | Transport               | Transport               | Provides end-to-end interface                              | TCP, UDP                                 |
| Network               | Network                 | Network                 | Selects routes for data packets                            | IP, ICHP, RIP, OSPF, BCP, ICMF           |
| Data Link             | Data Link               | Network Interface       | Transmits addressed stops and error detection functions    | SLIP, CSLIP, PPP, ARP, RARP, MTU         |
| Physical              | Physical                | Network Interface       | Transmits data in binary form on physical media            | IS02110, IEEE802, IEEE802.2              |


### HTTP

##### Request Methods

::: info

HTTP 1.0 supports three request methods:

- GET
- POST
- HEAD

HTTP 1.1 additionally supports 6 request methods

- OPTIONS 
- PUT 
- PATCH 
- DELETE
- TRACE
- CONNECT

:::

| Method  | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Requests a specified resource, used to get data                                                                                               |
| HEAD    | Similar to GET, but only returns the response header, does not return the response body                                                       |
| POST    | Used to submit information to the target address, used for data submission and file upload                                                    |
| PUT     | Submits updated information, used to replace original data                                                                                    |
| DELETE  | Deletes the specified resource                                                                                                                |
| CONNECT | Establishes a tunnel with the server                                                                                                          |
| OPTIONS | Returns the `HTTP` request methods supported by a specific server address, can also be used to test the functionality supported by the server |
| TRACE   | Echoes the request received by the server, mainly used for testing or diagnosis                                                               |
| PATCH   | Similar to `PUT`, mainly used for partial updates                                                                                             |

#### HTTP Status Codes
 
 | Number | Meaning                                                                                                                                                                              |
 | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 | 1XX    | Indicative information, indicates that the request has been received, continue processing                                                                                            |
 | 2XX    | Success, indicates that the request has been successfully received, understood, accepted                                                                                             |
 | 3XX    | The status code indicates that the resource requested by the client has changed, and the client needs to resend the request with a new URL to get the resource, which is redirection |
 | 4XX    | The status code indicates that the client's request message is incorrect, the server cannot process, which is the meaning of the error code                                          |
 | 5XX    | The status code indicates that the client's request message is correct, but an internal error occurred during server processing, which is the server-side error code                 |

::: details Common Status Codes

Sure, here is the English translation of your text:

| HTTP Status Code | Name                          | Description                                                                                                                                                                                                                                                                                              |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100              | Continue                      | **Continue** indicates that the client can continue to submit the request                                                                                                                                                                                                                                |
| 101              | Switching Protocols           | **Switching Protocols** switches the transmission protocol, can only switch from a lower version to a higher version, such as `HTTP1.0` switching to `HTTP1.1`                                                                                                                                           |
| 200              | OK                            | **OK** indicates that the server has successfully returned the data                                                                                                                                                                                                                                      |
| 201              | Created                       | **Created** indicates that the server has successfully received the request and created the corresponding resource                                                                                                                                                                                       |
| 202              | Accepted                      | **Accepted** indicates that the server has accepted the request, the request will be processed                                                                                                                                                                                                           |
| 203              | Non-Authoritative Information | **Non-Authoritative Information** indicates that the request was successful, but the returned meta information is not on the original server, but a copy                                                                                                                                                 |
| 204              | No Content                    | **No Content** indicates that the server has successfully processed the request                                                                                                                                                                                                                          |
| 205              | Reset Content                 | **Reset Content** the server has successfully processed, the user terminal (e.g., browser) should reset the document view. This return code can clear the browser's form field                                                                                                                           |
| 206              | Partial Content               | **Partial Content** the server has successfully processed part of the GET request                                                                                                                                                                                                                        |
| 300              | Multiple Choices              | **Multiple Choices** the requested resource can include multiple locations, the response can return a list of resource characteristics and addresses for the user terminal (e.g., browser) to choose                                                                                                     |
| 301              | Moved Permanently             | **Moved Permanently** the requested resource has been permanently moved to a new URI, the return information will include the new URI, the browser will automatically redirect to the new URI. Any new requests in the future should use the new URI instead                                             |
| 302              | Found                         | **Found** similar to 301. But the resource is only temporarily moved. The client should continue to use the original URI                                                                                                                                                                                 |
| 303              | See Other                     | **See Other** similar to 301. Use GET and POST requests to view                                                                                                                                                                                                                                          |
| 304              | Not Modified                  | **Not Modified** the requested resource has not been modified, the server returns this status code, will not return any resources. Clients usually cache accessed resources, by providing a header information indicating that the client wants to only return resources modified after a specified date |
| 305              | Use Proxy                     | **Use Proxy** the requested resource must be accessed through a proxy                                                                                                                                                                                                                                    |
| 307              | Temporary Redirect            | **Temporary Redirect** similar to 302. Use GET request to redirect                                                                                                                                                                                                                                       |
| 400              | Bad Request                   | **Bad Request** indicates that the client's request message is incorrect                                                                                                                                                                                                                                 |
| 401              | Unauthorized                  | **Unauthorized** missing or incorrect authentication, this status code must be used with the `WWW-Authenticate` header field                                                                                                                                                                             |
| 403              | Forbidden                     | **Forbidden** indicates that the server prohibits access to resources, it is not the client's request error                                                                                                                                                                                              |
| 404              | Not Found                     | **Not Found** indicates that the requested resource does not exist or was not found on the server, so it cannot be provided to the client                                                                                                                                                                |
| 501              | Not Implemented               | **Not Implemented** indicates that the functionality requested by the client is not yet supported                                                                                                                                                                                                        |
| 502              | Bad Gateway                   | **Bad Gateway** is usually an error code returned by the server when it acts as a gateway or proxy, indicating that the server itself is working normally, but an error occurred when accessing the backend server                                                                                       |
| 503              | Service Unavailable           | **Service Unavailable** indicates that the server is currently very busy and temporarily unable to respond to the server                                                                                                                                                                                 |
| 504              | Gateway Timeout               | **Gateway Timeout** is a gateway timeout, used by the server as a proxy or gateway, indicating that it cannot get a response from the remote server in a timely manner                                                                                                                                   |

:::

#### HTTPS vs HTTP

| Feature    | HTTP                                                                                                                     | HTTPS                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Definition | HTTP is the Hypertext Transfer Protocol, used to transfer hypertext from the World Wide Web server to the local browser. | HTTPS is HTTP with security, providing encryption processing, data integrity checking and identity authentication through SSL/TLS. |
| Port       | The default HTTP port is 80.                                                                                             | The default HTTPS port is 443.                                                                                                     |
| Security   | HTTP itself is not secure, because data is not encrypted during transmission, it may be obtained by third parties.       | HTTPS is secure, because data is encrypted during transmission, preventing it from being obtained by third parties.                |
| Speed      | HTTP is relatively fast, because there is no encryption and decryption process.                                          | HTTPS is relatively slow, because data needs to be encrypted and decrypted during transmission.                                    |


#### Working Principle

The `HTTPS` protocol will encrypt the transmitted data, and the encryption process uses asymmetric encryption

1. The `Client` initiates an `HTTPS` request
2. The `Server` returns the pre-configured public key certificate to the client.
3. The `Client` verifies the public key certificate: for example, whether it is within the validity period, whether the purpose of the certificate matches the site requested by the `Client`, whether it is in the `CRL` revocation list, whether its superior certificate is valid, this is a recursive process, until it is verified to the root certificate (the `Root` certificate built into the operating system or the `Client`), if the verification passes, continue, if not, display a warning message.
4. The `Client` uses a pseudorandom number generator to generate the symmetric key used for encryption, then encrypts this symmetric key with the certificate's public key, and sends it to the Server.
5. The `Server` uses its own private key to decrypt this message, obtaining the symmetric key. At this point, both the `Client` and `Server` hold the same symmetric key.
6. The `Server` uses the symmetric key to encrypt the plaintext content `A` and sends it to the `Client`.
7. The `Client` uses the symmetric key to decrypt the response ciphertext, obtaining the plaintext content `A`.
8. The `Client` initiates an `HTTPS` request again, encrypts the plaintext content `B` of the request with the symmetric key, and then the `Server` uses the symmetric key to decrypt the ciphertext, obtaining the plaintext content `B`.

![https](/assets/image/article/network/httpsgraph_en.png)

### HTTP 1.0 vs 1.1 vs 2.0

::: tip Differences
| Feature               | HTTP 1.0                                                                                     | HTTP 1.1                                                                                                              | HTTP 2.0                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Connection            | Non-persistent, each request requires a new connection                                       | Persistent, reduces the overhead of repeated TCP connection establishment and termination                             | Multiplexing, multiple HTTP requests can be concurrent on a single TCP connection                                       |
| Head-of-line blocking | Exists, the next request can only be sent after the response of the previous request arrives | Exists, although multiple requests can be initiated, the server must send responses in the order of received requests | Solved, multiple requests or responses can be concurrent in a single connection without having to correspond one by one |
| Header compression    | Not supported                                                                                | Not supported                                                                                                         | Supported, uses HPACK algorithm to compress headers                                                                     |
| Server push           | Not supported                                                                                | Not supported                                                                                                         | Supported                                                                                                               |
:::

### Digital Certificate

A digital certificate is an authoritative electronic document that provides a way to verify identity on the Internet. Digital certificates verify the online credentials and identity of individuals or organizations, and let network users and recipients know that the data they enter will go to a trusted source. They are similar to security badges for websites and users, and help ensure the security of the Internet.

Digital certificates are issued by Certificate Authorities (CAs) for encrypting online data. Digital certificates are also known as public key certificates or identity certificates. For example, TLS/SSL certificates have two purposes: to encrypt and protect data transmitted between websites, browsers, and web servers, and to help identify and verify the owner of the website.

The basic architecture of a digital certificate is Public Key Infrastructure (PKI), which uses a pair of keys to implement encryption and decryption. The keys include a private key and a public key. The private key is mainly used for signing and decryption, is user-defined, and is known only to the user; the public key is used for signature verification and encryption, and can be shared by multiple users.

The application of digital certificates is very wide. For example, using digital certificates in secure email can construct secure email certificates, mainly for encrypting the transmission of emails, protecting the security of emails during transmission and reception. In addition, digital certificates can also be used for terminal protection. For example, if a digital certificate is installed during the process of e-commerce activities, then even if its account or password and other personal information are stolen, the information and financial security in its account can still be effectively guaranteed.

#### How Digital Signature Works

![signature](/assets/image/article/network/signature.png)

> Signature Process

1. Use the signature hash algorithm (such as `sha256` `md5`) to calculate information including the issuer's information, the certificate holder's information, the certificate validity period, the certificate holder's public key, etc. (as in the example of `x.509`), to generate a certificate digest `α`.
2. The issuer generates a pair of private and public keys, then uses the private key to encrypt the fingerprint, and the encrypted data is the issuer's digital signature `γ`.
3. Attach the digital signature `γ` to the digital certificate to form a signed digital certificate.
4. The issuer gives the signed digital certificate and the public key to the certificate holder.

> Verification Process

1. The user obtains the signed digital certificate through some means (for example, browser access), and after parsing, the digital signature `γ` and the digital certificate can be obtained.
2. The user uses the fingerprint algorithm in the digital certificate to recalculate the relevant content of the digital certificate, generating a new fingerprint `β`.
3. At the same time, the user uses the obtained issuer's public key to decrypt the digital signature, and obtains the decrypted fingerprint `α`.
4. Compare the two fingerprints `α` and `β`. If they are the same, it proves that the certificate is legal, and the user can trust and use the information in the certificate (for example, the holder's public key).

::: details Example: Information contained in an X.509 certificate
1. Certificate version information
2. Certificate serial number
3. Signature algorithm used by the certificate
4. Name of the certificate issuing authority
5. Certificate validity period, now commonly used certificates generally use UTC time format, its timing range is 1950-2049
6. Name of the certificate owner
7. Public key of the certificate owner
8. Signature of the certificate issuer on the certificate
:::

::: tip Functions

1. Data encryption: Encrypt data to ensure data security
2. Identity confirmation: Ensure the correct identity of both parties
3. Non-tampering: Unable to modify signed files
4. Non-repudiation: Under the supervision of CA, ensure that transactions cannot be denied after they are concluded

:::