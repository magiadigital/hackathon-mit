

# Problem:
In lower income countries, corruption is present and takes a toll, preventing these countries to economically develop. It is present at all levels and it impacts more if the elected officials are corrupt. To have better conditions to develop, it is key for those countries to have a fair and transparent election process, as well as provide secure, more accessible, cost-effective ways to have more citizens to exercise the right to vote.

# Solution:
According to OECD ( * ) corruption is widespread and part of the culture in most developing countries and the cost of implementing reforms is high. Our solution starts to tackle the issue from top to bottom, focusing into the government election process, and an alternative to providing a scalable, extensible way—technically and functionally to provide transparency at a lower cost. It leverages Chaincode to develop smart contracts over Hyperledger Fabric. It can provide an alternative (in technology and more efficient processes) to over a hundred developing nations (with over 5 billion inhabitants) that attended the International Anti-Corruption Conference and have intentions to fight this issue.

( * ) [http://oecdobserver.org/news/archivestory.php/aid/291/Fighting_corruption_in_the_developing_countries.html]

## System Architecture
![System Architecture](https://github.com/magiadigital/hackathon-mit/raw/master/readimg/diagramaComponentes.png)

The enrollment process can be completed even with the electronic national ID, generating a password that is stored encrypted and symmetrically on the Blockchain and associated to the ID. The frontend reads the blockchain, unencrypts the password and that way it matches with the encrypted key and provides access to the vote screen.

Once the user logins the vote is processed and stored on Blockchain by the Smart Contract created according to the architecture described, on an immutable and incorruptible way.

There is an implemented function that is executed at the end of the voting process and delivers the results of the election process.

### Working Deployment
Frontend -> http://190.81.160.143:4201/

Example enrrolled users without voting (userID - password):
* 12345672 - clave2
* 12345673 - clave3
* 12345675 - clave5
* 12345676 - clave6
* 12345678 - clave8

With voting:
* 12345671 - clave1
* 12345672 - clave2
* 12345674 - clave4
* 12345677 - clave7
