//fetch incoming hook
function doPost(e) {
    var c = e.postData.contents;
    var postmarkData = JSON.parse(c);
    
    //postmarkData is the object as described in postmarkAPI docs.
    
    //fetch attachments
    if (data.Attachments.length>0) {
        if (data.Attachments[0].Content) {
          var blob = Utilities.newBlob(Utilities.base64Decode(data.Attachments[0].Content), data.Attachments[0].ContentType).setName(data.Attachments[0].Name);
          //use blob further in GAS
        
        }
    }
}

//send a mail
//http://developer.postmarkapp.com/developer-send-api.html

function sendMail() {
  var url = "https://api.postmarkapp.com/email";
  var PostmarkServerToken = "abcdefg";
  
  var emailData = {
    "From": "x@x.nl",
    "To": "x@x.nl",
    "Subject": "Postmark test",
    "HtmlBody": "<html><body><strong>Hello</strong> dear Postmark user.</body></html>"
  }
  
  var options = {
    headers: {
      "Accept": "application/json",
      "X-Postmark-Server-Token": PostmarkServerToken,
    },
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(emailData)
  }
  
  
  
  //send email
  var result = UrlFetchApp.fetch(url,options).getContentText();
  
  
  //response
  /*
  {
  "To": "x@x.nl",
  "SubmittedAt": "2016-06-03T09:41:26.0931238-04:00",
  "MessageID": "5c5exxx9-d4e5-4275-bxxa-b2cxxx1f7af3",
  "ErrorCode": 0,
  "Message": "OK"
  }
  */
}
    
