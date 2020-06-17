$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="MessageInfo">
            <div class="MessageInfo__UserName">
              ${message.user_name}
            </div>
            <div class="MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__Content">
              ${message.content}
            </p>
            <div class="Message">
              <img class="Message__image" src="${message.image}">
            </div>  
          </div>
        </div>`
      return html; 
    } else {
      let html = 
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="MessageInfo">
          <div class="MessageInfo__UserName">
            ${message.user_name}
          </div>
          <div class="MessageInfo__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__Content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $(".Form").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      let html = buildHTML(data);
      $(".MessageField").append(html);
      $(".Form")[0].reset();
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      $(".SubmitBtn").prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $(".SubmitBtn").prop("disabled", false);
    });
  }); 
});  