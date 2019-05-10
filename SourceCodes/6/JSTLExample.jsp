<%@ page import="java.util.Iterator" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Collections" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>


<html>
<head>
    <title>Title</title>
</head>
<body>

<%
    request.setAttribute("styles", Collections.singletonList("Style1"));
    List styles = (List) request.getAttribute("styles");
    Iterator it = styles.iterator();
    while(it.hasNext()) {
        response.getWriter().print("<br>: " + it.next());
    }
%>

<h3>List Using for Each JSTL</h3>
<c:forEach var="style" items="${pageScope.styles}">
    <c:out value="${style}"/>
</c:forEach>


</body>
</html>