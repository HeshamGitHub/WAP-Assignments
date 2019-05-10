<%@ page import="com.demo.hesham.laps.quiz.pojo.Quiz" %>
<%@ page language="java" contentType="words/html; charset=US-ASCII"
         pageEncoding="US-ASCII" import="java.util.*" %>
<html>
<head>
    <title>Quiz</title>
    <link href="../style.css" rel="stylesheet">
</head>
<body>

<fieldset>
    <legend>Quiz</legend>
    <form method="get">
        <%
            HttpSession s = request.getSession();
            Quiz quiz = (Quiz) s.getAttribute("quiz");
            if (quiz == null) {
                quiz = new Quiz();
            }
            String answerStr = request.getParameter("answer");
            boolean answerResult = true;
            if (answerStr != null) {
                int answer = Integer.parseInt(answerStr);
                if (quiz.checkAnswer(answer)) {
                    quiz.incrementScoreByOne();
                } else {
                    answerResult = false;
                }
            }
            if (answerResult == false && quiz.getScore() >= 5) {
                response.sendRedirect("result.jsp");
            }
            session.setAttribute("quiz", quiz);
        %>

        <div class="input_line">
            <h3>Your Current Score is ${sessionScope.quiz.score} </h3>
            <h3>Guess The Number in the sequence : </h3>
            <h3>${sessionScope.quiz.currentQuestion} </h3>
        </div>
        <br>
        <div class="input_line">
            <input type="number" name="answer">
        </div>

        <div class="input_line">
            <input class="input-submit" type="submit" value="Submit">
        </div>
    </form>
</fieldset>
</body>
</html>