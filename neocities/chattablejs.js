 window.onload = function(){
	document.getElementById('chattable').contentWindow.postMessage(`
            	#top_banner {
            	background: #7964F5;
            	}
            	#top_banner:before {
            display: inline-block;
            width: 15pt;
            height: 15pt;
            content: ' ';
            background-image: url('https://pearliasystem.neocities.org/assets/pixels/saturn3.webp');
            background-size: 100% 100%;
            margin-right: 5px;
          }
            	#background {
                overflow-x: hidden;
                overflow-y: scroll;
            	}
            	.msgWrapper {
            		font-family: basiic;
            	}
            	.allMessages {
            		font-family: basiic;
            	}
            	.senderInfo {
            		font-weight: bold;
            		color: #FF9AE4;
            	}
            	.mod, .owner, .role {
            }
            	.sent {
            		
            	}
            	.recieved {
            		
            	}
            	.msgBody {
            		
            	}
            	#background {
            		
            	}
            	#input {
            	  font-family: basiic;
            		color: white;
            	}
            	::placeholder {
                color: white;
                opacity: 1;
              }
              
              ::-ms-input-placeholder { 
                color: white ;
              }
              #input:empty::before {
                color: white;
                font-family: basiic;
                font-size: small;
              }
            	#textInput {
              background: #7964F5;
            	}
            	#settings {
            	margin-right: 5px;
              color: #7964F5;
            	}
            	.mod:before {
            		
            	}
            	.owner:before {
            	margin-right: 5px;
              color: #7964F5;
            	}
`, '*')
}