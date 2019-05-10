package com.demo.hesham.laps.calc;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calc")
public class CalculatorServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Result</title></head><body>");

        String addNum1String = req.getParameter("add_num1");
        String addNum2String = req.getParameter("add_num2");
        String mulNum1String = req.getParameter("mul_num1");
        String mulNum2String = req.getParameter("mul_num2");
        if (addNum1String != "" || addNum2String != "") {
            int addNum1 = Integer.parseInt(addNum1String);
            int addNum2 = Integer.parseInt(addNum2String);
            out.print("<h3>" + addNum1 + "+" + addNum2 + "=" + (addNum1 + addNum2) + "</h3>");
        }
        if (mulNum1String != "" || mulNum2String != "") {
            int mulNum1 = Integer.parseInt(mulNum1String);
            int mulNum2 = Integer.parseInt(mulNum2String);
            out.print("<h3>" + mulNum1 + "+" + mulNum2 + "=" + (mulNum1 * mulNum2) + "</h3>");
        }
        out.print("</body></html>");

    }
}