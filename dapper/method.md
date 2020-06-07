# Method

## Execute

## ExecuteReader
## ExecuteScalar
## Query
### Anonymous
### Strongly Typed
### Multi-Mapping (One to One)

生のSQLクエリは、Queryメソッドを使用して実行し、1対1の関係を持つ厳密に型指定されたリストに結果をマップできます。

```cs
string sql = "SELECT * FROM Invoice AS A INNER JOIN InvoiceDetail AS B ON A.InvoiceID = B.InvoiceID;";

using (var connection = My.ConnectionFactory())
{
    connection.Open();

    var invoices = connection.Query<Invoice, InvoiceDetail, Invoice>(
            sql,
            (invoice, invoiceDetail) =>
            {
                invoice.InvoiceDetail = invoiceDetail;
                return invoice;
            },
            splitOn: "InvoiceID")
        .Distinct()
        .ToList();
}
```

### Multi-Mapping (One to Many)
生のSQLクエリは、Queryメソッドを使用して実行し、結果を1対多の関係で厳密に型指定されたリストにマップできます。

```cs
// Dapper Plus
// Doc: https://dapper-tutorial.net/query

// @nuget: Dapper -Version 1.60.6

using Dapper;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Collections.Generic;
					
public class Program
{
	public class OrderDetail
	{
		public int OrderDetailID { get; set; }
		public int OrderID { get; set; }
		public int ProductID { get; set; }
		public int Quantity { get; set; }
	}
	
	public class Order
	{
		public int OrderID { get; set; }
		public int CustomerID { get; set; }
		public int EmployeeID { get; set; }
		public DateTime OrderDate  { get; set; }
		public int ShipperID  { get; set; }
		public List<OrderDetail> OrderDetails { get; set; }
	}
	
	public static void Main()
	{
		string sql = "SELECT TOP 10 * FROM Orders AS A INNER JOIN OrderDetails AS B ON A.OrderID = B.OrderID;";

		using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
		{			
			var orderDictionary = new Dictionary<int, Order>();
			
			
			var list = connection.Query<Order, OrderDetail, Order>(
            	sql,
            	(order, orderDetail) =>
            	{
                	Order orderEntry;
                
                	if (!orderDictionary.TryGetValue(order.OrderID, out orderEntry))
                	{
                    	orderEntry = order;
                    	orderEntry.OrderDetails = new List<OrderDetail>();
                    	orderDictionary.Add(orderEntry.OrderID, orderEntry);
                	}

                	orderEntry.OrderDetails.Add(orderDetail);
                	return orderEntry;
            	},
            	splitOn: "OrderDetailID")
        	.Distinct()
        	.ToList();

    		Console.WriteLine("Orders Count:" + list.Count);
			
			FiddleHelper.WriteTable(list);
			FiddleHelper.WriteTable(list.First().OrderDetails);
		}
	}
}
```

|OrderID|CustomerID|EmployeeID|OrderDate|ShipperID|OrderDetails|
|---|---|---|---|---|---|
|10248|90|5|7/4/1996 12:00:00 AM|3|System.Collections.Generic.List`1[Program+OrderDetail]|
|10249|81|6|7/5/1996 12:00:00 AM|1|System.Collections.Generic.List`1[Program+OrderDetail]|
|10250|34|4|7/8/1996 12:00:00 AM|2|System.Collections.Generic.List`1[Program+OrderDetail]|
|10251|84|3|7/8/1996 12:00:00 AM|1|System.Collections.Generic.List`1[Program+OrderDetail|

|OrderDetailID|OrderID|ProductID|Quantity|
|---|---|---|---|
|1|10248|11|12|
|2|10248|42|10|
|3|10248|72|5|

### Multi-Type
## QueryFirst
## QueryFirstOrDefault
## QuerySingle
## QuerySingleOrDefault
## QueryMultiple
