$(document).ready(function () {
  $("form#quiz").submit(function(event) {
    const magicAnswer = parseInt($("input:radio[name=magic]:checked").val());
    const hobbyAnswer = parseInt($("input:radio[name=hobby]:checked").val());
    const jobAnswer = parseInt($("input:radio[name=job]:checked").val());
    const answerTotal = magicAnswer + hobbyAnswer + jobAnswer;
    
    $("form#quiz").hide();

    if(answerTotal <= 3) {
      $("#sorcerer").show().siblings().hide();
    } else if(answerTotal > 3 && answerTotal <= 6) {
      $("#wizard").show().siblings().hide();
    } else if(answerTotal > 6 && answerTotal <= 9) {
      $("#cleric").show().siblings().hide();
    } else if(answerTotal > 9 && answerTotal <= 12) {
      $("#druid").show().sibling().hide();
    }

    console.log("answer total: ", answerTotal);
    console.log("magic answer: ", magicAnswer);
    event.preventDefault();
  });
});