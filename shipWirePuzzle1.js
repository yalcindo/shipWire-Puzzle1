

	var orders=[{"orderId" : 1, "packingStart" : 160, "duration" : 60} ,
	{"orderId" : 2, "packingStart" : 170, "duration" : 70}
	,{"orderId" : 3, "packingStart" : 310, "duration" : 30},
	{"orderId" : 4, "packingStart" : 320, "duration" : 30},
	{"orderId" : 5, "packingStart" : 330, "duration" : 30},
	{"orderId" : 6, "packingStart" : 350, "duration" : 30}];
	var totalArr=[];
	var groupingDivs = function(){
		for( var i=0;i<orders.length;i++)	
		{
			var conMin=orders[i].packingStart;
			var conMax=orders[i].packingStart+orders[i].duration;
			
			 var objArr=[];
			for(var j=orders.length-1;i<j;j--)
			{
				var minJ=orders[j].packingStart;
				var maxJ=orders[j].packingStart + orders[j].duration;
				if((conMin<=minJ && minJ<=conMax)|| (conMin<=maxJ && maxJ<=conMax))
				{
					if(conMax<maxJ)
						{conMax=maxJ;}
					if(minJ<conMin)
						{conMin=minJ;}

					if(objArr.indexOf(orders[i].orderId)===-1)
					{
	             		objArr.push(orders[i].orderId);
	             		
	             	}
	             	if(objArr.indexOf(orders[j].orderId)===-1)
	             	{
	             		objArr.push(orders[j].orderId);
                     var j=orders.length-1;

	                }

				}
              
	        }

	       if(objArr.length)
	       { 
	       	console.log(objArr);
             totalArr.push(objArr); 
         	}
	    }
	    console.log(totalArr);
	    return totalArr;
	}

	groupingDivs();







    
		// var y_pos =orders[i].packingStart;
		// var boxHeight=orders[i].duration;
		// var x_pos = 5;
		// var d =$("<div class='box'> </div>");
		// d.css("class","box"+orders[i].orderId)
		// d.css("top",y_pos);
		// d.css("left",x_pos);
		// d.css("height",boxHeight);
		// // d.css("background-color","blue")
		// $(".canvas").append(d);
		// d.append("<p> #"+orders[i].orderId+"</p>")
	
