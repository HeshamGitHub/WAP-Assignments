package com.mum.wagdi.laps.quiz.pojo;

public class Quiz {

    private Integer score;

    private static String[] questions = {
            "3,1,4,1,5",
            "1,1,2,3,5",
            "1,4,9,16,25",
            "2,3,5,7,11",
            "1,2,4,8,16"
    };

    private static int[] answers = {9, 8, 36, 13, 32};

    public Quiz() {
        this.score = 0;
    }

    public Integer getScore() {
        return score;
    }

    public void incrementScoreByOne() {
        score++;
    }

    public boolean checkAnswer(int answer) {
        if (answer == answers[score]) {
            return true;
        }
        return false;
    }

    public String getCurrentQuestion() {
        return questions[score];
    }
}
