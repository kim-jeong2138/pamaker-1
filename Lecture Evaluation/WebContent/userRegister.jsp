<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import = "user.UserDTO"%>
<%@ page import ="user.UserDAO"%>
<%@ page import = "util.SHA256"%>
<%@ page import ="java.io.PrintWriter"%>
<%
	request.setCharacterEncoding("UTF-8");
	String userID = null;
	String userPassword = null;
	String userEmail = null;
	if(request.getParameter("userID") !=null){
		userID = request.getParameter("userID");
	}
	if(request.getParameter("userPassword") != null){
		userPassword = request.getParameter("userPassword");
	}
	if(request.getParameter("userEmail")!=null){
		userEmail = request.getParameter("userEmail");
	}
	if(userID == null || userPassword == null userEmail == null){
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('�Է��� �ȵ� ������ �ֽ��ϴ�.')");
		script.println("history.back();");
		script.println("</script>");
		script.close();
		return;
	}
	UserDAO userDAO = new UserDAO();
	int result = userDAO.join(new UserDTO(userID, userPassword,userEmail,SHA256.getSHA256,false));
	if(result == -1){
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('�̹� �����ϴ� ���̵� �Դϴ�.')");
		script.println("history.back()");
		script.println("</script>");
		script.close();
		return;
	}else{
		session.setAttrubute("userID", userID);
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("location.href = 'emailSendAction.jsp'");
		script.println("</script>");
		script.close();
		return;
	}
%>