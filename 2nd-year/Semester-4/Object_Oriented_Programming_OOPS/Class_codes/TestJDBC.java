import java.sql.*;

class TestJDBC {
    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/";    
            String user = "root";
            String pwd = "@#amulyajain2004";
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(url, user, pwd);
            System.out.println("Connection successful: " + con);

            Statement st = con.createStatement();
            String sql1 = "USE jdbc";
            st.executeUpdate(sql1);
            String sql = "INSERT INTO emp(name, salary) VALUE ('rajesh', 8799.080)";
            st.executeUpdate(sql);

            st.close();
            con.close();
            System.out.println("SQL executed successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
