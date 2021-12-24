/*CMD
  command: checkaddress
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
if (message.includes("0x")){
Bot.runCommand("/about")

}else{

Bot.sendMessage("*🚫Please enter the correct wallet address*")
Bot.runCommand("checkaddress")
}



