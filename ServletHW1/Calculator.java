package wap.labs;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Calculator
 */
@WebServlet("/Calculator")
public class Calculator extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Calculator() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		String op1=request.getParameter("op1");
		String op2=request.getParameter("op2");
		String op3=request.getParameter("op3");
		String op4=request.getParameter("op4");
		
		String error1="";
		String error2="";
		
		if ((op1==null) || (op2==null) || op1.equals("") || op2.equals("")){
		   error1="Missing Parameter Cannot Sum";
		}else{
			int op1Int=Integer.valueOf(op1);
			int op2Int=Integer.valueOf(op2);
			error1=String.valueOf(op1Int+op2Int);
		}
		if ((op3==null) || (op4==null) ||  op3.equals("") || op4.equals("")){
			error2="Missing Parameter cannot multiply";
		}else{
			int op3Int=Integer.valueOf(op3);
			int op4Int=Integer.valueOf(op4);
			error2=String.valueOf(op3Int*op4Int);			
		}
		 
		
		
	//	String st="<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\"><title>Insert title here</title><style>div {	max-width: 100%;}.op {	width: 100px;} .message{color:red;}</style></head><body>	<form action=\"Calculator\" method=\"get\">		<div>			<input class=\"op\" type=\"text\" name=\"op1\" /> <label>+</label> <input				class=\"op\" type=\"text\" name=\"op2\" /> <label>=</label> <input class=\"op\" type=\"text\" name=\"res1\" value=\""+error1+"\"/></div><div>			<input class=\"op\" type=\"text\" name=\"op3\" /> <label>*</label> <input				class=\"op\" type=\"text\" name=\"op4\" /> <label>=</label> <input				class=\"op\" type=\"text\" name=\"res2\"value=\""+error2+"\"/>		</div>		<input type=\"submit\" value=\"Calculator\" />	</form></body></html>";
		
		String st="<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\"><title>Insert title here</title><style>div {	max-width: 100%;}.op {	width: 100px;} .message{color:red;}</style></head><body>	<form action=\"index.jsp\" method=\"get\">		<div>			"+op1+" <label>+</label> "+op2+"<label>=</label>"+error1+"</div><div>			"+op3+"<label> * </label> "+op4+"<label>=</label>"+error2+"</div>		<input type=\"submit\" value=\"Back for Another Trial\" />	</form></body></html>";
		
		PrintWriter pw=response.getWriter();
		pw.append(st);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
