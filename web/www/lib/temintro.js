module.exports = {
    HTML: function (list) {
      return `
      <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
    />
    <link rel="stylesheet" href="intro.css" />
  </head>
  <body>
    <header>
      <nav class="nav-wrapper transparent">
        <div class="container">
          <a href="" class="header-logo" id="header-logo"
            ><img src="logo_white.png" style="width: 80px" alt="" />22세기
            사진관</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="companyinfo.html">기업소개</a></li>
            
            </ul>
        </div>
      </nav>
      <div class="video" id="start">
         <video muted autoplay loop>
          <source src="dogg.mp4" type="video/mp4" />
        </video> 
              <!--<div class=mainImg></div>-->  
        <div class="videoText">
          <p style="font-weight: 600">나의 반려동물과 소중한 추억을</p>
          <a class="waves-effect waves-light btn-large" href="./first.html"
            >시작하기</a
          >
          <a
            class="waves-effect waves-light btn-large"
            href="#introduction"
            >이용방법</a
          >
        </div>
      </div>
    </header>

    <div class="row" id="content">
      <h4 style="text-align: center">
        이제는 반려동물과 함께 사진찍자!
      </h4>

      <div class="col s12 l12 offset-l3">
        <img src="dog1.jpg" class="contentImg" alt="" />
        <img src="cat1.jpg" class="contentImg" alt="" />
        <img src="dog2.jpg" class="contentImg" alt="" />
      </div>
      <p>&nbsp;</p>
    </div>

    <section class="container section scrollspy" id="introduction">
      <div class="row">
        <h4
          style="
            text-align: center;
            margin-bottom: 100px;
            margin-top: 50px;
            font-weight: 600;
          "
        >
          쉽고 간편하게 이용해보세요.
        </h4>
      </div>
            
      <div class="row">
        <div class="col s12 l4">
          <div class = "infoImg">
          <img src="regi.png" alt="" class="responsive-img materialboxed" /></div>
        </div>
        <div class="col s12 l6 offset-l1" style="margin-top: 30px; text-align: center;">
          <h5>간단한 회원가입으로 로그인</h5>
          <p>이름, 이메일, 비밀번호 최소의 정보만 등록하여 회원가입 후 </p>
          <p>22세기 사진관의 회원이 되어주세요! </p>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l6 push-l7">
          <div class = "infoImg">
          <img src="list.png" alt="" class="responsive-img materialboxed" /></div>
        </div>
        <div class="col s12 l6 pull-l6 right-align" style="margin-top: 30px; text-align: center;" >
          <h5>포토폴리오 및 후기를 통해 작가님 선택</h5>
          <p>작가님의 프로필과 포토폴리오를 구경하세요</p>
          <p>22세기 사진관을 통해 진행된 후기를 보며 원하는 작가님을 선택하여 주세요! </p>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l4">
          <div class = "infoImg">
          <img src="chat.png" alt="" class="responsive-img materialboxed" /></div>
        </div>
        <div class="col s12 l6 offset-l1" style="margin-top: 30px; text-align: center;">
          <h5>작가님과의 채팅을 통해 상담 후 촬영 진행</h5>
          <p>원하는 작가님과 대화하기를 눌러 촬영 정보를 주고 받고</br> 한번뿐인 추억을 만들어 보세요!</p> 

        </div>
      </div>
      <div class="container">
        <!-- <div class="row">
          <div class="col s12 l4">
            <img src="" alt="" class="responsive-img materialboxed" />
          </div>
          <div class="col s12 l6 offset-l1">
            <h6 style="font-weight: 600">작가님과의 채팅을 통해 상담 후 촬영 진행</h6>
            <p>
              기능에 대해 간단한 설명이 들어갈 부분입니다 기능에 대해 간단한
              설명이 들어갈 부분입니다 기능에 대해 간단한 설명이 들어갈
              부분입니다 기능에 대해 간단한 설명이 들어갈 부분입니다 설명이
              들어갈 부분입니다 기능에 대해 간단한 설명이 들어갈 부분입니다
              기능에 대해 간단한 설명이 들어갈 부분입니다
            </p>
          </div>
        </div> -->
      </div>
    </section>

    <div class="row" id="content">
      <div class="container">
      <h4>작가님 소개</h4>
      <div class="col s4">
        <div class="box">
        <img class="profile" src="photograper1.jpg"/></div>
        <h6>현근창 작가님</h6>
        <p> <a href="?id=wkrrk@naver.com">작가님 프로필 바로가기</a></p>
      </div>
      <div class="col s4">
        <div class="box">
          <img class="profile" src="cat.jpg"/></div>
        <h6>김땡땡 작가님</h6>
        <p> <a href="?id=egoing777@gmail.com">작가님 프로필</a></p>
      </div>
      <div class="col s4">
        <div class="box">
          <img class="profile" src="cat1.jpg"/></div>
        <h6>이모모 작가님</h6>
        <p></p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="container">
      <h4 style="text-align: center">후기</h4>
      ${list}
    </div>
  </div>

  <div class="row" id="content">
    <div class="container" style="text-align: center;">
      <h5>5만원부터 시작되는 서비스!! </h5>
      <a class="waves-effect waves-light btn-large"  href="./first.html">시작하기</a>
    </div>
  </div>

  
        <footer class="page-footer" style="background-color: #242424;">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <p class="grey-text text-lighten-4"><img src="logo_white.png" style="width: 80px" alt="" /></p>
              </div>
              <div class="col l4 offset-l2 s12">
                
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">고객문의</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;songyein620@gmail.com </li>
                  <li><a class="grey-text text-lighten-3" href="#!">제휴문의</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;pamaker@gmail.com</li>
                  <li><a class="grey-text text-lighten-3" href="#!">사업자등록번호</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;315-52-00648</li>
                  <li><a class="grey-text text-lighten-3" href="#!"></a>   충청북도 청주시 흥덕구 복대1601</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
  


    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    <script unsafe-inline>
      $(document).ready(function () {
        $('.scrollspy').scrollSpy()
      })
    </script>
  </body>
</html>
        `
    },
    list: function (topic) {
      var list =
        '<table class="css-serial"><thead><th>no.</th><th>제목</th></thead><tbody>'
      var i = 0
      while (i < 28) {
          console.log(i)
          list =
          list +
          `<tr><td>&nbsp;</td><td><a href="?id=${topics[i].id}">${topics[i].title}</a></td></tr>`
        }
        i = i + 1

      list = list + '</tbody></table>'
      return list
    }
}