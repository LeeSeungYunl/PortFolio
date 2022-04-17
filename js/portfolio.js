const projectImg = document.querySelectorAll(".project-img img")

        projectImg[0].addEventListener("click", function(){
            // history.pushState({},'modal','/modal');
            const div = document.createElement("div");
            div.id = "root";
            const content = `<h2 style="margin-top: 4rem; white-space: nowrap">Montage(영화 중심의 SNS)</h2>
                        <br>
                        <div class="summary">
                                <table style="border-spacing: 30px;">
                                    <tr >
                                        <td colspan="2" class="pb-05rem">
                                            2022.01.07 ~ 2022.02.11
                                        </td>
                                    </tr>
                                    <tr >
                                        <td class="pb-05rem">
                                            <span class="nowrap">팀원 : </span>
                                        </td>
                                        <td class="pb-05rem">
                                           5명
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-05rem nowrap">개발 목표 : </td>
                                        <td class="pb-05rem">
                                            영화에 관한 평점, 리뷰를 중심으로 영화에 대한 소통을 중심으로 한 SNS
                                        </td>
                                    </tr>
                                    <tr>
                                        <td  class="pb-05rem" style="width: 10%;">
                                            <span  class="nowrap">구현 기능 : </span>
                                        </td>
                                        <td class="pb-05rem">
                                            <span class="vivid1">이메일 인증 회원 가입</span>
                                            <span class="vivid1">회원 정보 수정</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">게시글 CRUD</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">게시글 검색</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">API를 통한 영화 검색</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">영화 리뷰 및 평점</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">해시태그</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">댓글 CRUD</span>
                                            <span class="vivid1">팔로우</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">좋아요</span>
                                            <span class="vivid1">회원 간 메시지</span>
                                            <span class="vivid1">회원경고</span>
                                            <span class="vivid1"  style="background-color: #a5ffa9;">신고</span>
                                            <span class="vivid1">문의</span>
                                            <span class="vivid1">통계</span>
                                            <span class="vivid1">관리자 게시판</span>
                                            <span class="vivid1" style="background-color: #a5ffa9;">무한스크롤</span>
                                            <br>
                                            <span style="font-size:5px;">
                                                <span class="vivid1" style="background-color: #a5ffa9;"></span>
                                                <span style="opacity: 0.7;">
                                                : 담당 기능
                                                </span>
                                            </span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            개발 환경 : 
                                        </td>

                                        <td class="pb-05rem">
                                             <span class="vivid1" style="background-color: #ffa5a5;">apache-tomcat 8.5</span>
                                             <span class="vivid1" style="background-color: #a5d2ff;">Eclipse</span>
                                             <span class="vivid1" style="background-color: #f0a5ff;">Oracle SQL Delveloper</span>
                                             <span class="vivid1" style="background-color: #b6a5ff;">JAVA</span>
                                             <span class="vivid1" style="background-color: #ffefa5;">HTML</span>
                                             <span class="vivid1" style="background-color: #a5ffc6;">CSS</span>
                                             <span class="vivid1" style="background-color: #a5ffa9;">JavaScript</span>
                                             <span class="vivid1" style="background-color: #ffe3a5;">SQL</span>
                                             <span class="vivid1" style="background-color: #ffb7a5;">Spring</span>
                                             <span class="vivid1" style="background-color: #a5ffa9;">Git</span>
                                             <span class="vivid1" style="background-color: #ffa5a5;">WebSocket</span>
                                             <span class="vivid1" style="background-color: #a5d2ff;">Ajax</span>
                                             <span class="vivid1" style="background-color: #f0a5ff;">API</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pb-05rem nowrap">담당 역할 : </td>
                                        <td class="pb-05rem">
                                            게시판 기능 및 USECASE 담당
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="nowrap">
                                            ERD 논리
                                            <img class="light-img diagram-img" src="image/언더독 논리.png" alt="">
                                            ERD 물리
                                            <img class="light-img diagram-img" src="image/언더독 물리.png" alt="">
                                            USECASE
                                            <img class="light-img diagram-img" src="image/UseCase.png" alt="">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                        <br>
                                        참여 소감 <br><br>
                                            &nbsp;두 번째 프로젝트입니다.
                                            첫번째 프로젝트에서 경험한 깃 사용의 문제, 작업의 순서 등 문제점을 겪지 않고자 노력했습니다.
                                            그럼에도 분업의 모호함 등 새로운 문제등을 겪게 되었습니다.
                                            하지만 전 프로젝트보다 규모가 컸고, 새로운 기능을 만들었다는 점에서 정말 깊고 풍부한 경험을 했다고 생각합니다.
                                        </td>
                                    </tr>
                                </table>
                                <br>
                                담당 기능 구현 내용
                                <div class="project-detail-wrapper">
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="FinalVideo/insertPost4.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            게시글 등록 기능 <br>
                                            게시글을 350글자로 제한하는 기능 <br>
                                            해시태그 기입 기능 <br>
                                            AJAX를 통한 태그 자동 검색 기능<br>
                                            해시태그 조회 기능
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="FinalVideo/imageAndYoutubePost.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            이미지 등록 및 미리보기 기능 <br>
                                            유튜브 등록 경로 유효성 검사 기능 <br>
                                            유튜브 등록 및 미리보기 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                             <video src="FinalVideo/moivePost.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            영화 검색 기능 <br>
                                            별점 기능 <br>
                                            영화 포스터 등록 및 미리보기 기능 <br>
                                            주간 영화 랭킹 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                             <video src="FinalVideo/readPost.mp4"muted controls></video>
                                        </div>
                                        <div>
                                            게시글 좋아요 기능 <br>
                                            게시글에 대한 링크 복사, 신고, 삭제 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                             <video src="FinalVideo/replyPost.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            댓글 및 답글 조회 기능 <br>
                                            댓글 및 답글 삽입 기능 <br>
                                            댓글 및 답글 좋아요 기능 <br>
                                            댓글 및 답글 신고 기능 <br>
                                            댓글 및 답글 삭제 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                           <video src="FinalVideo/rangeMainPost.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            무한스크롤 조회 기능 <br>
                                            팔로우 한 게시글 만 노출하는 기능 <br>
                                        </div>
                                    </div>
                                </div>
                        </div>`;
                div.innerHTML += content;
                document.getElementsByClassName("modal-body")[0].innerHTML = "";
                document.getElementsByClassName("modal-body")[0].append(div);
                lightbox1()
        })

        projectImg[1].addEventListener("click", function(){
            // history.pushState({},'modal','/modal');
            const div = document.createElement("div");
            div.id = "root";
            const content = `<h2 style="margin-top: 4rem;">Develog(개발자 블로그)</h2>
                        <br>
                        <div class="summary">
                            <table style="border-spacing: 30px;">
                            <tr >
                                <td colspan="2" class="pb-05rem">
                                    2021.11.15 ~ 2021.12.28
                                </td>
                            </tr>
                            <tr >
                                <td class="pb-05rem">
                                    <span class="nowrap">팀원 : </span>
                                </td>
                                <td class="pb-05rem">
                                4명
                                </td>
                            </tr>
                            <tr>
                                <td class="pb-05rem nowrap">개발 목표 : </td>
                                <td class="pb-05rem">
                                    쉽고 가볍게 사용할 수 있는 개발자 블로그 사이트
                                </td>
                            </tr>
                            <tr>
                                <td  class="pb-05rem" style="width: 10%;">
                                    <span  class="nowrap">구현 기능 : </span>
                                </td>
                                <td class="pb-05rem">
                                    <span class="vivid1">회원 가입</span>
                                    <span class="vivid1">회원 정보 수정</span>
                                    <span class="vivid1">게시글 CRUD</span>
                                    <span class="vivid1">게시글 검색</span>
                                    <span class="vivid1">해시태그</span>
                                    <span class="vivid1">댓글 CRUD</span>
                                    <span class="vivid1">좋아요</span>
                                    <span class="vivid1">회원 경고</span>
                                    <span class="vivid1">신고</span>
                                    <span class="vivid1">문의</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">문의 답변</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">통계</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">관리자 게시판</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">회원 정지</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">관리자에 의한 게시글 및 댓글 삭제</span>
                                    <br>
                                    <span style="font-size:5px;">
                                        <span class="vivid1" style="background-color: #a5ffa9;"></span>
                                        <span style="opacity: 0.7;">
                                        : 담당 기능
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    개발 환경 :     
                                </td>
                                <td class="pb-05rem">
                                    <span class="vivid1" style="background-color: #ffa5a5;">apache-tomcat 8.5</span>
                                    <span class="vivid1" style="background-color: #a5d2ff;">Eclipse</span>
                                    <span class="vivid1" style="background-color: #f0a5ff;">Oracle SQL Delveloper</span>
                                    <span class="vivid1" style="background-color: #b6a5ff;">JAVA</span>
                                    <span class="vivid1" style="background-color: #ffefa5;">HTML</span>
                                    <span class="vivid1" style="background-color: #a5ffc6;">CSS</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">JavaScript</span>
                                    <span class="vivid1" style="background-color: #ffe3a5;">SQL</span>
                                    <span class="vivid1" style="background-color: #a5ffa9;">Git</span>
                                    <span class="vivid1" style="background-color: #ffb7a5;">Ajax</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pb-05rem nowrap">담당 역할 : </td>
                                <td class="pb-05rem">
                                    팀장 <br>
                                    DB 설계와 관리자 게시판 기능 담당 <br>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="nowrap">
                                    ERD 논리
                                    <img class="light-img diagram-img" src="image/디컨_14_세미프로젝트ERD_논리_블러조.png" alt="">
                                    ERD 물리
                                    <img class="light-img diagram-img" src="image/디컨_14_세미프로젝트_ERD_물리_블러조.png" alt="">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                <br>
                                참여 소감 <br><br>
                                    &nbsp; 처음 하는 사이트 제작 프로젝트였습니다.
                                    안개가 낀 바다 위를 항해하는 배처럼 앞 길을 알 수 없어 많은 시행착오를 겪었습니다. <br>
                                    그러나 이 경험을 토대로 웹 개발에 대한 풍부한 경험을 할 수 있게 되었고 다음 프로젝트의 청사진을 그리게 되었습니다.
                                </td>
                            </tr>
                            </table>
                                <br>
                                담당 기능 구현 내용
                                <div class="project-detail-wrapper">
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminLogin.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            관리자 로그인 기능 <br>
                                            로그인 없이 관리자 페이지 접근 불가 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminMember1.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            회원 경고 기능 <br>
                                            경고 사유 기록 기능<br>
                                            경고 3회 이상 시 자동 회원 정지 기능<br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminMember2.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            페이지 네이션 구현<br>
                                            이메일, 닉네임 등 다양한 조건으로 검색 가능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminPoster.mp4"muted controls></video>
                                        </div>
                                        <div>
                                            페이지 네이션 구현<br>
                                            다양한 조건으로 게시글 검색 가능 <br>
                                            게시글 게시판 내 회원 경고 가능 <br>
                                            내용 클릭 시 게시글 상세 페이지 이동 기능 <br>
                                            관리자에 의한 게시글 삭제 기능 <br>
                                            게시글 삭제 사유 조회 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminReply.mp4"muted controls></video>
                                        </div>
                                        <div>
                                            페이지 네이션 구현<br>
                                            다양한 조건으로 댓글 검색 가능 <br>
                                            댓글 게시판 내 회원 경고 가능 <br>
                                            관리자에 의한 댓글 삭제 기능 <br>
                                            댓글 삭제 사유 조회 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminStatistics.mp4" muted controls></video>
                                        </div>
                                        <div>
                                             회원, 게시글, 조회수에 대한 간단한 통계 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                            <video src="SemiVideo/adminReport.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            페이지 네이션 구현<br>
                                            다양한 조건으로 신고 검색 가능 <br>
                                            신고 내용 상세 조회 기능 <br>
                                        </div>
                                    </div>
                                    <div class="project-detail flex-row1">
                                        <div>
                                             <video src="SemiVideo/adminEnquiry.mp4" muted controls></video>
                                        </div>
                                        <div>
                                            페이지 네이션 구현<br>
                                            다양한 조건으로 문의글 검색 가능 <br>
                                            문의글 상세 조회 기능 <br>
                                            문의글 답변 기능 <br>
                                        </div>
                                    </div>
                                </div>
                        </div>`;
                div.innerHTML += content;
                document.getElementsByClassName("modal-body")[0].innerHTML = "";
                document.getElementsByClassName("modal-body")[0].append(div);
                lightbox2()
        })


        function lightbox1(){
            const erdImg = document.getElementsByClassName("light-img")

            erdImg[0].addEventListener("click", function(e){
                const div = document.createElement("div")
                div.className = "lightbox"
                const lightbox = `<img  src="image/언더독 논리.png" alt="">`
                div.innerHTML += lightbox
                document.body.append(div)
                e.stopPropagation()
            })

            erdImg[1].addEventListener("click", function(e){
                const div = document.createElement("div")
                div.className = "lightbox"
                const lightbox = `<img  src="image/언더독 물리.png" alt="">`
                div.innerHTML += lightbox
                document.body.append(div)
                e.stopPropagation()
            })

            erdImg[2].addEventListener("click", function(e){
                const div = document.createElement("div")
                div.className = "lightbox"
                const lightbox = `<img  src="image/UseCase.png" alt="">`
                div.innerHTML += lightbox
                document.body.append(div)
                e.stopPropagation()
            })

        }

        function lightbox2(){
            const erdImg = document.getElementsByClassName("light-img")

            erdImg[0].addEventListener("click", function(e){
                const div = document.createElement("div")
                div.className = "lightbox"
                const lightbox = `<img  src="image/디컨_14_세미프로젝트ERD_논리_블러조.png" alt="">`
                div.innerHTML += lightbox
                document.body.append(div)
                e.stopPropagation()
            })

            erdImg[1].addEventListener("click", function(e){
                const div = document.createElement("div")
                div.className = "lightbox"
                const lightbox = `<img  src="image/디컨_14_세미프로젝트_ERD_물리_블러조.png" alt="">`
                div.innerHTML += lightbox
                document.body.append(div)
                e.stopPropagation()
            })


        }
        


        document.body.addEventListener("click", function(){
            if(document.getElementsByClassName("lightbox")[0]){
                document.getElementsByClassName("lightbox")[0].remove();
            }
        })

// document.getElementsByClassName("btn-close")[0].addEventListener("click", function(){
//     window.history.back()
// })