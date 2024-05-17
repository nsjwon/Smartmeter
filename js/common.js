//헤더 메뉴 드롭다운
$(document).ready(function() {
    
    $("#gnb").mouseenter(function() {
        // 마우스가 올라갔을 때
        $("#header").addClass("on");
        $(".gnb-bg").addClass("on");
        $(".depth2").addClass("on");
        $(".dim").show();
    }).mouseleave(function() {
        // 마우스가 나갔을 때
        $("#header").removeClass("on");
        $(".gnb-bg").removeClass("on");
        $(".depth2").removeClass("on");
        $(".dim").hide();
    });
});

//레프트 메뉴 클릭이벤트
$(document).ready(function() {
    $(".two-depth").hide();

    // active 클래스를 가진 .d1 요소를 찾습니다.
    $(".d1.active").each(function() {
        // 해당 .d1 요소 내의 .two-depth 요소를 보이게 합니다.
        $(this).find(".two-depth").show();
    });

    $(".d1 > a").click(function(e) {
        if ($(this).parent(".one-menu").length > 0) {
            // one-menu 클래스가 있는 경우에는 링크로 이동
            window.location.href = $(this).attr("href");
        } else {
            e.preventDefault();
            var twoDepthMenu = $(this).siblings(".two-depth");
            
            // 클릭한 one-depth 메뉴를 제외하고 모든 two-depth 메뉴를 숨김
            $(".two-depth").not(twoDepthMenu).hide();
            $(".d2").removeClass("active");
            $(".three-depth").not(twoDepthMenu).hide();
            
            // 클릭한 one-depth 메뉴의 two-depth 메뉴를 토글
            twoDepthMenu.toggle();
            
            // 모든 one-depth 메뉴에서 "active" 클래스 제거
            $(".d1").removeClass("active");
            
            // 클릭한 one-depth 메뉴에 "active" 클래스 추가
            $(this).parent(".d1").addClass("active");
        }
    });
});

//상세 페이지 내용 접었다 폈다 하는 기능
$(document).ready(function() {
    $(".board-block").on("click", ".btn-accordion", function(event) {
        var boardBlock = $(this).closest(".board-block");
        boardBlock.find(".board-list").toggle();
        boardBlock.find(".inner-table-wrap").toggle();
        boardBlock.toggleClass("fold");
        $(this).toggleClass("fold");
        
        if (boardBlock.hasClass("fold")) {
            boardBlock.find(".board-list").hide();
            boardBlock.find(".inner-table-wrap").hide();
            boardBlock.find(".caution-txt").hide();
        } else {
            boardBlock.find(".board-list").show();
            boardBlock.find(".inner-table-wrap").show();
            boardBlock.find(".caution-txt").show();
        }
    });
});

//window 사이즈에 따라 테이블 스크롤 추가
$(document).ready(function(){
    function checkWindowSize() {
        if($(window).width() <= 1440){
            $('.table-wrap').addClass('scroll');
        } else {
            $('.table-wrap').removeClass('scroll');
        }
    }

    // 페이지 로드시 확인
    checkWindowSize();

    // 창의 크기가 변경될 때마다 확인
    $(window).resize(function(){
        checkWindowSize();
    });
});

//팝업 이벤트
$(document).ready(function() {
    $(".selectable").click(function(event) {
        $(".selectable").removeClass("select");
        $(this).toggleClass("select");
    });
});

$(document).ready(function() {
    const body = $('body')[0];
    // 팝업 열기 버튼 클릭 이벤트
    $('.popup-button').click(function() {
        var target = $(this).data('target');
        $(target).show();
        //본문창 스크롤 막기
        $('body').addClass('scrollLock');
    });
    
    // 팝업 닫기 버튼 클릭 이벤트
    $('.popup-panel .close-button').click(function() {
        $(this).closest('.popup-panel').hide();
        //본문창 스크롤 막기 해제
        $('body').removeClass('scrollLock');
    });
});


$(document).ready(function() {
    // 문서가 로드될 때 각 라디오 버튼을 확인하고 해당 .typeLabel에 "checked" 클래스를 추가합니다.
    $('.typeSuggest').each(function() {
        if ($(this).prop('checked')) {
            $(this).closest('.typeLabel').addClass('checked');
        }
    });

    // 라디오 버튼의 변경 이벤트를 감지하여 .typeLabel에 "checked" 클래스를 추가 또는 제거합니다.
    $('.typeSuggest').change(function() {
        // 모든 .typeLabel 요소에서 "checked" 클래스를 제거합니다.
        $('.typeLabel').removeClass('checked');

        // 선택한 라디오 버튼에 해당하는 .typeLabel에 "checked" 클래스를 추가합니다.
        if ($(this).prop('checked')) {
            $(this).closest('.typeLabel').addClass('checked');
        }
    });
});


// 클릭 시 해당 url로 이동하는 이동함수
function fn_pageMove(url) {
    window.location.href = url;
}

$(document).ready(function() {
    // fn_overlap 함수 정의
    function fn_overlap(targetPopup) {
        // #popup1 숨기기
        $('.popup-panel').hide();

        // 목표 팝업 보이기
        $('#' + targetPopup).show();
    }

});


$(document).ready(function(){
    // tbody의 각 행(tr) 클릭 이벤트
    // $('tbody tr').click(function(){
    //     // 첫 번째 td 안의 체크박스
    //     var checkbox = $(this).find('td:first-child input[type="checkbox"]');
    //     // 체크박스가 이미 체크되어 있는지 확인
    //     var isChecked = checkbox.prop('checked');
    //     // 이미 체크되어 있다면 checked 속성 삭제
    //     if(isChecked){
    //         checkbox.prop('checked', false);
    //     } else { // 아니라면 checked 속성 추가
    //         checkbox.prop('checked', true);
    //     }
    // });

    // tbody의 각 행(tr) 더블클릭 이벤트
    $('.linkable tr').dblclick(function(){
        // pagemove() 함수 실행
        fn_pageMove();
    });
});

$(document).ready(function(){
    $('#registBtn').click(function(){
        var result = confirm("등록하시겠습니까?");

        if(!result){return false;}
    });

    $('#editBtn').click(function(){
        var result = confirm("수정하시겠습니까?");

        if(!result){return false;}
    });

    $('#delBtn').click(function(){
        var result = confirm("삭제하시겠습니까?");

        if(!result){return false;}
    });
});

