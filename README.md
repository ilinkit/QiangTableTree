# QiangTableTree
A table tree JQuery plug-in，make your tree data more wonderfull  ：)

# QiangTableTree User Guide
The sentence '凤凰于飞，和鸣锵锵' from Chinese classical famous chapter. This means 'two phoenix danced together, making a beautiful sound.' 'Qiang' of QiangTableTree is the Chinese Pinyin of Chinese character '锵'. In China, the Phoenix is praised as "the king of birds", which means auspicious and noble. As we know, the Phoenix will build a nest in the "tree", so we named our jQuery plug-in QiangTableTree.
We hope our TableTree controls can be optimized continuously, and help more developers to develop excellent application like the Phoenix base on QiangTableTree. 
Thanks.

## 1. Getting started
### a. css and js file
QiangTableTree is a Web plug-in created based on jQuery. You need to import the following files before you use id：
1> jQuery.min.js: jQuery file。
```
   <script type="text/javascript" src="assets/js/jquery.min.js"></script>
```
2> jquery.QTTCtrl.css -- stylesheet file of QiangTableTree:
```
   <link href="assets/QiangTableTree/jquery.QTTCtrl.css" rel="stylesheet">
```
3> jquery.QTTCtrl.js -- JavaScript file of QiangTableTree:
```
   <script type="text/javascript" src="assets/QiangTableTree/jquery.QTTCtrl.js"></script>
```
4> blue.css -- custom skin file of QiangTableTree:
```
   <link href="assets/QiangTableTree/skin/blue.css" rel="stylesheet">
```
		 
### b. HTML structure
QiangTableTree displays a tree with a 'property value' table, it consists of two parts:
1. QTTHeader: title part of table tree.
2. QTTContainer: container part of table tree.
For example：
```HTML
	    <div id="qiang-table-tree" class="qiang-table-tree">
			<!--start of QTTHeader-->
			<div class="QTTHeader">
				  <div class="treeHeaderBox">
					  <span class="tLabel">Country</span>
					  <ul class="tValue">
					  </ul>
				  </div>
			</div>
			<!--end of QTTHeader-->
			<!--start of QTTContainer-->
			<div class="QTTContainer">
				....
			</div>
			<!--end of QTTContainer-->
		</div>
```	  
	  
### c. Initialize tree data
QiangTableTree use a recursive structure of the JSON object as the data source, for example：
```javascript	  
var treeData = {
		name:'2014 FIFA World Cup',
		value:{},
		children:[
			{
				name:'Group A',
				value:{},
				children:[]
			},
			{
				name:'Group B',
				value:{},
				children:[]
			}
		]
	 };
```	 
Each node of the table tree must include 3 parts：
-name: name of node, String type
-value: value of node which contains specific business information, Object type
-children：children node of current node, Array type

 
### d. Create QiangTableTree object
When creating QiangTableTree, we need to pass in a options object, including a jQuery object of the QiangTableTree container and some custom behavior functions.
```javascript	
	 var QTTCtrl = window.QTT.qiangTableTree( {
		TreeBox : $('#qiang-table-tree'),
		createNodeIconHTML: function( nodeObj ){
			return '';
		});
```	

The properties of options, TreeBox is required, and other custom behaviors functions are optional.
The complete list of custom behavior functions is as follows:
```javascript	
			//Create icons view of node based on node data
			createNodeIconHTML: function( nodeObj ){
				return '';
			}, 
			//Create name view  of node based on node data
			createNodeNameHTML: function( nodeObj ){
				return nodeObj.name ;
			},
            //Create action buttons view  of node based on node data, such as: edit button, delete button			
			createNodeBarHTML: function( nodeObj ){
				return '' ;
			},    
			//Create value table view  of node based on node data
			createNodeValueHTML: function( nodeObj ){
				return '' ;
			},
			//Match tree node with keyword , if a node contains the keyword, return true, or else return false
			findNodeContent: function( treeNode , keyword ){
				return _findNodeContent( treeNode , keyword );
			}
```		 
### e. Update data of QiangTableTree
```javascript
QTTCtrl.updateTree( treeData );       //Update table tree with treeData
```  
Note: Each operation of QiangTableTree is through the QiangTableTree object, which created by the QiangTableTree function.
FIFA2014.html is a complete example of QiangTableTree. It's stylesheet file is worldcupteam.css and it's javascript file is worldcupteam.js.

## 2. Structure composition
### a. Table tree title and container
The base structure as follows：
```css
	  .qiang-table-tree
		  .QTTHeader
		      .treeHeaderBox
		  .QTTContainer
			  .qttNode
```			  
### b. Concept of ViewNode and DataNode of table tree
-ViewNode: The HTML node which defined width .QttNode class.
-DataNode：The JavaScript object which include many properties( nodeID,name,value,children )in treeData。

ViewNode and DataNode can be transformed each other:
```javascript
	  //Get nodeID of ViewNode
	  var nodeID = QTTCtrl.getNodeIdByDomObj( domObj  );
	  //Get DataNode by nodeID
	  var dataNodeObj = QTTCtrl.getNodeByID( nodeID  );
	  //Get ViewNode by nodeID, if the ViewNode of nodeID is non-existent, then return null
	  var viewNodeObj = QTTCtrl.getDomNodeByID( nodeID );
```	  
### c. Icon,Text,View
Each table tree node include: treeNode part and valueTable part
	treeNode include:
		  .tAction
			 .t-icon : icon of node 
			 .t-text : name of node
			 (.bar-content): action button of node
      
	valueTable include：
		  .tValue
			 .td-1
			 .td-2
			 ...
How to create each part of node, we can refer to the introduction of 'custom behavior' function.      
	  
## 3. Function of QiangTableTree
Each tree node object contains a ID that uniquely identifies the current node in the current state. Most of the operations for tree nodes depend on the node ID (nodeID).
When the data in QiangTableTree changes (for example, calling update function), the nodeID of table tree node is regenerated.

### a. getNodeByID
Get DataNode of nodeID
-Parameter: nodeID, number type, the ID of the tree node
-Return: DataNode of table tree, if the DataNode of nodeID is non-existent, then return undefined
-Example: 
```javascript
	  var dataNodeObj = QTTCtrl.getNodeByID( nodeID );
```	
Note: QTTCtrl is the QiangTableTree object which created by window.QTT.qiangTableTree function 

### b. getDomNodeByID
Get ViewNode of nodeID
-Parameter: nodeID, number type, the ID of the tree node
-Return: DataNode of table tree, if the DataNode of nodeID is non-existent, then return null
-Example: 
```javascript
	  var viewNodeObj = QTTCtrl.getDomNodeByID( nodeID );
```		  
### c. shrinkAllNode
Shrink all node of table tree
-Parameter: none
-Return: true
-Example: 
```javascript
	  QTTCtrl.shrinkAllNode();
```
### d. expandAllNode
Expand all node of table tree。
-Parameter: none
-Return: true
-Example: 
```javascript
	  QTTCtrl.expandAllNode();
```	  
### e. expandToNode
Expand to the specified node, and all ancestor nodes and sibling nodes of the node are visible.
-Parameter: 
(nodeID): nodeID, number type, the ID of the tree node
or 
(nodeArray): nodeArray, array type, nodeArray include the nodeID of ViewNode which need to be expand.
-Return: 
If the parameter is nodeID, return true when expand success and false on failure.
If the parameter is nodeArray, return true when all of nodes are expand success, or else return false.
Usually, expand failure means the ViewNode with the nodeID is non-existent.

-Example: 
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.expandToNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.expandToNode( nodeArray );
```	  
### f. selectNode
Mark the specified node as the selected state, and the style definition of the selected state is defined as the custom style.
-Parameter:
(nodeID): nodeID, number type, the ID of the tree node
or 
(nodeArray): nodeArray, array type, nodeArray include the nodeID of ViewNode which need to be selected.

-Return: 
If the parameter is nodeID, return true when selected success and false on failure.
If the parameter is nodeArray, return true when all of nodes are selected success, or else return false.
Usually, select failure means the ViewNode with the nodeID is non-existent.
-Example: 
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.selectNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.selectNode( nodeArray );
```	  
### g. cancelSelectNode
Cancel the specified node the selected state。
-Parameter:
(nodeID): nodeID, number type, the ID of the tree node
or 
(nodeArray): nodeArray, array type, nodeArray include the nodeID of ViewNode which need to be cancel.

-Return: 
If the parameter is nodeID, return true when selected success and false on failure.
If the parameter is nodeArray, return true when all of nodes are canceled success, or else return false.
Usually, cancel failure means the ViewNode with the nodeID is non-existent.
-Example: 
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.cancelSelectNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.cancelSelectNode( nodeArray );
```	  
### h. cancelAllSelectNode
Cancel all nodes of the selected state.
-Parameter: none
-Return: true
-Example: 
```javascript
	  QTTCtrl.cancelAllSelectNode();
```	  
### i. updateTree
Use the parameter tree data to create table tree.
Caution: 
Run this function will create new nodeID of table tree.
-Parameter: treeData , JSON object. The structure reference the 'Initialize tree data' .
-Return: true
-Example: 
```javascript
	  var treeData = {
		name:'rootNode',
		value:{},
		children:[
			{
				name:'childNode_1',
				value:{},
				children:[]
			},
			{
				name:'childNode_2',
				value:{},
				children:[]
			},
			{
				name:'childNode_3',
				value:{},
				children:[]
			}
		]
	  };
	  
	  QTTCtrl.updateTree( treeData );
```	  
### j. getTreeData
Return the tree data JSON object of the table tree.
-Parameter: none
-Return: treeData , JSON object. The structure reference the 'Initialize tree data' . 
-Example: 
```javascript
	var treeData = QTTCtrl.getTreeData();
```		
Caution：
It can not change the view of table tree through modify the tree data directly, 
If you want change the value of specified node, you can use the function editNode.
      
### k. addNode
Add new node to QiangTableTree.
-Parameter: 
    parentNodeID: the nodeID of the parent node
    newNodeObj: new node object which include properties: name, value, children.
-Return: 
    If the parent node existent, return true , otherwise return false.
-Example: 
```javascript
	  var parentNodeID = 1 ;
	  var newNodeObj = {
		 name:'NewNode',
		 value:{},
		 children:[]
	  };
	  QTTCtrl.addNode( parentNodeID , newNodeObj );
```	
Caution：
Run this function will create new nodeID of table tree.
      
### l. editNode
Edito the node of QiangTableTree.
-Parameter: 
    nodeID: number type, the ID of the tree node which will be edited
    editedNodeObj: JSON object of new node.
Caution:
    You can only edit the name and value of the table tree node.
	If you want modify the info of children nodes of specificed node, please use the function addNode and deletenNode.
-Return: 
 If the specificed node existent, return true , otherwise return false.

-Example: 
```javascript
	  var nodeID = 1 ;
	  var editedNodeObj = {
		 name:'EditedNode',
		 value:{}
	  };
	  QTTCtrl.newNodeObj( nodeID , editedNodeObj );
```	  
### m. deleteNode
Delete the node of table tree. When you delete one node, then the children of this node are also deleted.
-Parameter: 
	nodeID: number type, the ID of the tree node which will be deleted
-Return: 
 If the specificed node existent, return true , otherwise return false.
-Example: 
```javascript
	  var nodID = 5;
	  QTTCtrl.deleteNode( nodeID );
```
Caution：
When run the function deleteNode, the nodeID of table tree are also be updated.
By convention, root node is not allowed to be deleted.
	  
### n. findNode
To find the nodes which match the condition. By default, the QiangTableTree will match the name and value of node.
You can get owner find behavior by redefining the function findNodeContent option.
-Parameter: 
    keyword：The keyword of condition. String type or number type.
-Return: 
    resultArray：array type, resultArray include the nodeID of DataNode which match the keyword condtion. 
	  
-Example: 
```javascript
	    var keyword = 'Football' ;
		var resultArray = QTTCtrl.findNode( keyword );
		
		//Highlight the result of find
		QTTCtrl.highlightNode( resultArray );
		
		//Expand to the tree nodes of find keyword
		QTTCtrl.expandToNode( resultArray );
```	  
### o. findNodeByName
To find the nodes which match the condition of name.
-Parameter: 
    keyword：The keyword of condition. String type or number type.
-Return: 
    resultArray：array type, resultArray include the nodeID of DataNode which match the keyword condtion. 
    
-Example: 
```javascript
	    var keyword = 'BasketBall' ;
	    var resultArray = QTTCtrl.findNodeByName( keyword );
```	  
### p. findNodeByValue
To find the nodes which match the condition of value.
-Parameter: 
    keyword：The keyword of condition. String type or number type.
-Return: 
    resultArray：array type, resultArray include the nodeID of DataNode which match the keyword condtion. 
      
-Example: 
```javascript
	    var value = 1982 ;
	    var resultArray = QTTCtrl.findNodeByValue( value );
```		
### q. highlightNode
Highlight the specificed table tree node. The style of highlight node to reference the customization of look and feel.
Before highlight the specificed tree node, QiangTableTree while clear the highlight status of all node.
-Parameter: 
     nodeIDArray：array type, nodeIDArray include the nodeID of ViewNode which need to be highlighted.
-Return: true
	   
-Example: 
```javascript
	   var nodeIDArray = [ 1 , 3 , 12] ;
	   QTTCtrl.highlightNode( nodeIDArray );
```	   
### r. getNodeIdByDomObj
Get table tree node by DOM object(.qttNode) of tree.
-Parameter: domObj, DOM object
-Return: nodeID, the nodeID of DOM table tree node. If the domObj is not a table tree node, return -1.
-Example: 
```javascript
	  $('#qiang-table-tree .t-text').click( function(){
		  var qttNode = $(this).closest( '.qttNode' );
		  var nodeID = QTTCtrl.getNodeIdByDomObj( qttNode.get(0) );
		  if( nodeID > 0 ){
			var nodeObj = QTTCtrl.getNodeByID( nodeID ) ;
			
			//Do something by nodeObj
			//...
			
		  } 
	  });
```	   
   
## 4. Customize QiangTableTree
Different business types, tree nodes contain value attribute values are different, rendering methods, find methods are different.
You can customize the look and behavior of QiangTableTree when it is initialized.

### 1. Customization of behavior
You can customize the behavior of QiangTableTree by defining the function properties of initialization option.
For example: If we hope add a star icon before each tree node, we can do as follows:
```javascript
   //Use Glyphicons to create a star icon before node name
   var createStarHTML = function( nodeObj ){
	   return '<span class="glyphicon glyphicon-star"></span>' ;
   }
   
   //Create QiangTableTree object
   var qttCtrl = window.QTT.qiangTableTree({
		createNodeIconHTML: createStarHTML
   });
```   
The list of behavior functions of QiangTableTree are as follows：
1. createNodeIconHTML
Define the function of creating icon content of node. By default, the function return blank string('').
-Parameter: 
     nodeObj:current DataNode be rendering

-Example: 
```javascript
	   //Use Glyphicons to create a star icon before node name
	   var createStarHTML = function( nodeObj ){
		   return '<span class="glyphicon glyphicon-star"></span>' ;
	   }
	   
	   //Create QiangTableTree object
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeIconHTML: createStarHTML
	   });
```	  
2. createNodeNameHTML
Define the function of creating name content of node. By default, the function return the name of DataNode.
-Parameter: 
    nodeObj: current DataNode be rendering
-Example: 
```javascript 
	   //Create QiangTableTree object
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeNameHTML: function( nodeObj ){
				var nameHTML = '' ;
				//if node is a team node, make it red
				if( nodeObj.value.isTeam ){
					nameHTML = '<span class="red-font">'+nodeObj.name+'</span>';
				}
				else{
					nameHTML = nodeObj.name ;
				}
				
				return nameHTML;
			};
	   });
```	   
3. createNodeBarHTML
Define the function of creating bar content of node. By default, the function return blank string('').
-Parameter: 
	nodeObj: current DataNode be rendering
-Example: 
If we need add a button to each table tree node to edit the table tree node, we can do as follow:
```javascript
		//Create QiangTableTree object
		var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeNameHTML: function( nodeObj ){
				var barHTML = '<span class="edit-btn" data-teamid="'+nodeObj.value.teamID+'" >Edit</span>' ;
				return barHTML;
			};
	    });
```

Of course, we hope the 'Edit Button' be shown only when the mouse hover the node, so we need define some style rule.
```css
		.qiang-table-tree .tAction>.edit-btn{
			display:none;
		}
		.qiang-table-tree .tAction:hover>.edit-btn{
			display:inline-block;
		}
```				
4. createNodeValueHTML
Define the function of creating value content of node. 
-Parameter: 
	nodeObj：current DataNode be rendering。
-Example: 
```javascript
	    //Create QiangTableTree object
		var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeValueHTML: function( nodeObj ){
				var valueHTML = '';
				var valueObj = nodeObj.value ;
				
				//Suppose we want to show value_1, value_2, value_3 attribute values in value object
				valueHTML =  '<li class="td-1">'+(valueObj.value_1  )+'</li>'
						   + '<li class="td-2">'+(valueObj.value_2  )+'</li>'
						   + '<li class="td-3">'+(valueObj.value_3  )+'</li>'
				
				return valueHTML;
			};
	    });
```	
Of course, we hope each row of table achieve alignment effect, so we need define some style rule.
```css
		.qiang-table-tree .td-1,
		.qiang-table-tree .td-2,
		.qiang-table-tree .td-3{
			width:12%;
			text-align:center;
		}
		.qiang-table-tree .td-3{
			color:#F00;
			font-weight:bold;
		}
```		
5. findNodeContent
Define the match rule of QiangTableTree. This matching rule determines the retrieval behavior of the findNode function.
Usually, different business will include different value properties, and also has different match rules.
-Parameter: 
       nodeObj: the table tree node be found
       keyword: the keyword of find function
-Return: 
       If the nodeObj match the business rule, return true, or else return false
-Example: 
```javascript
       //If we hope find the node with the isTeam property of value object is true, and name include the keyword
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			findNodeContent: function( nodeObj , keyword ){
				var result = false ;
				if( nodeObj.value.isTeam === true && nodeObj.name.indexOf( keyword ) >=0 ){
					result = true ;
				}
				return result;
			};
	    });
```  
### 2. Customization of look and feel
QiangTableTree support to customize the look and feel of table tree. You can define styles as follows:
-The color of ViewNode line.
-The color of font.
-The style of hover status.
-The style of selected status.
-The style of highlight status.
You can reference the css file: QiangTableTree/skin/default.css

Because the QiangTableTree support the function of creating HTML code, we suggest you defined the business style(for example: .edit-btn) in business css file(for example: worldcupteam.css ).
   
## 5. Thanks & Feedback
If you have any advice, welcome to email to me.[My Email](mailto:zhanglai5678@163.com)



==============================================================中文指南===================================================
# QiangTableTree 使用指导
'凤凰于飞，和鸣锵锵'，源自中国的古典名篇，原意为'凤与凰在空中相偕而飞，一起鸣叫的声音悦耳嘹亮'，QiangTableTree中的Qiang就是汉字'锵'的拼音。在中国，凤凰被誉为'百鸟之王'，寓意吉祥、高贵。《诗经》里说："凤凰鸣矣，于彼高岗；梧桐生矣，于彼朝阳"，
在中国，梧桐树一直被认为是能够吸引凤凰的树，用Qiang来命名树控件，希望我们的树控件能够不断优化，'筑巢引凤'，让更多的开发者能够基于QiangTableTree开发出优秀的应用。

## 1. 快速开始(Getting started)
### a. css和js文件
QiangTableTree是基于jQuery创建的Web插件，使用之前需要导入如下文件：
1> jQuery.min.js：jQuery库文件。
```
   <script type="text/javascript" src="assets/js/jquery.min.js"></script>
```
2> jquery.QTTCtrl.css：控件的样式定义，例如：
```
   <link href="assets/QiangTableTree/jquery.QTTCtrl.css" rel="stylesheet">
```
3> jquery.QTTCtrl.js：控件的JS文件，例如：
```
   <script type="text/javascript" src="assets/QiangTableTree/jquery.QTTCtrl.js"></script>
```
4> 自定义的皮肤文件，例如：blue.css。
```
   <link href="assets/QiangTableTree/skin/blue.css" rel="stylesheet">
```
		 
### b. HTML结构
QiangTableTree展现了一棵带有'属性值'表格的树，在HTML结构中由两部分组成：
标题(QTTHeader)和容器(QTTContainer)。
例如：
```HTML
	    <div id="qiang-table-tree" class="qiang-table-tree">
			<!--start of QTTHeader-->
			<div class="QTTHeader">
				  <div class="treeHeaderBox">
					  <span class="tLabel">Country</span>
					  <ul class="tValue">
					  </ul>
				  </div>
			</div>
			<!--end of QTTHeader-->
			<!--start of QTTContainer-->
			<div class="QTTContainer">
				....
			</div>
			<!--end of QTTContainer-->
		</div>
```	  
	  
### c. 初始化Tree数据
QiangTableTree使用一个递归结构的JSON对象作为数据来源，基本的结构如下：
```javascript	  
var treeData = {
		name:'2014 FIFA World Cup',
		value:{},
		children:[
			{
				name:'Group A',
				value:{},
				children:[]
			},
			{
				name:'Group B',
				value:{},
				children:[]
			}
		]
	 };
```	 
每一个节点，包含3个部分：
-name: 名称，字符串类型。
-value: 属性值，对象字面量{}，具体业务信息。
-children：子节点，数组类型[]，包含它的子节点的相关信息。
每个节点都必须包含这3个部分。
 
### d. 创建QiangTableTree对象
在创建QiangTableTree时需要传入一个options对象，包括一个QiangTableTree容器的jQuery对象和一些自定义的行为函数。
```javascript	
	 var QTTCtrl = window.QTT.qiangTableTree( {
		TreeBox : $('#qiang-table-tree'),
		createNodeIconHTML: function( nodeObj ){
			return '';
		});
```	

其中，TreeBox是必须的，其他的自定义行为都是可选的。
完整的自定义行为函数列表如下：
```javascript	
			//根据节点数据生成节点的图标。
			createNodeIconHTML: function( nodeObj ){
				return '';
			}, 
			//根据节点数据生成节点的名称
			createNodeNameHTML: function( nodeObj ){
				return nodeObj.name ;
			},
                        //根据节点数据生成节点的操作按钮，例如：编辑、删除			
			createNodeBarHTML: function( nodeObj ){
				return '' ;
			},    
			//根据节点数据，生成节点对应的value的信息
			createNodeValueHTML: function( nodeObj ){
				return '' ;
			},
			//根据关键词检索树，如果某个节点中包含keyword的内容，则返回true,否则返回false
			findNodeContent: function( treeNode , keyword ){
				return _findNodeContent( treeNode , keyword );
			}
```		 
### e. 更新数据(treeData)到QiangTableTree
对QiangTableTree的操作，都是通过创建的QiangTableTree的对象函数实现。
```javascript
QTTCtrl.updateTree( treeData );       //更新数据到树中
```  
完整的例子可以查看代码中的 FIFA2014.html，业务相关的样式定义在 worldcupteam.css 中，
业务相关的逻辑代码定义在 worldcupteam.js 当中。

## 2. 结构组成
### a. 标题栏 + 展示区域
标题栏定义在(.QTTHeader)容器中，展示区域定义在(.QTTContainer)容器中。
	  基本结构如下：
```css
	  .qiang-table-tree
		  .QTTHeader
		      .treeHeaderBox
		  .QTTContainer
			  .qttNode
```			  
### b. 视图节点(viewNode)和数据节点(dataNode)的概念。
-视图节点：在界面上看到的，用(.qttNode)样式定义的HTML节点。
-数据节点：treeData 中包含的有nodeID,name,value,children属性的JavaScript对象。

两者可以相互转化：
```javascript
	  //根据视图节点，获得对应的nodeID
	  var nodeID = QTTCtrl.getNodeIdByDomObj( domObj  );
	  //根据nodeID获得对应的数据节点
	  var dataNodeObj = QTTCtrl.getNodeByID( nodeID  );
	  //根据nodeID获得对应的视图节点，如果指定的nodeID不存在，则返回null
	  var viewNodeObj = QTTCtrl.getDomNodeByID( nodeID );
```	  
### c. 节点包括：icon , text , view
在同一个节点中，包括：treeNode区域和valueTable区域。
	treeNode区域的组成：
		  .tAction
			 .t-icon : 节点图标
			 .t-text : 节点名称
			 (bar-content): 节点的操作栏部分。
      
	  valueTable区域的组成：
		  .tValue
			 .td-1
			 .td-2
			 ...
      
生成各个部分的方式，可以参考'自定义行为'中的介绍。
	  
## 3. 功能说明
每个树节点对象包含有一个ID，用来唯一标识当前状态下的当前节点。针对树节点的大部分操作，都依赖于节点ID（nodeID）。
当QiangTableTree中的数据发生改变时(例如：调用update)，会重新生成对应的ID。

### a. getNodeByID
根据nodeID返回对应的数据节点。
-参数：nodeID：数字类型，要获得的node的ID值。
-返回：数据节点对象，如果ID对应的节点对象不存在，则返回undefined。
-举例：
```javascript
          //QTTCtrl 为通过window.QTT.qiangTableTree 函数生成的QiangTableTree对象，下同。
	  var dataNodeObj = QTTCtrl.getNodeByID( nodeID );
```	  
### b. getDomNodeByID
根据nodeID返回对应的视图节点。
-参数：nodeID：数字类型，要获得的node的ID值。
-返回：视图节点对象，如果ID对应的节点对象不存在，则返回null。
-举例：
```javascript
	  var viewNodeObj = QTTCtrl.getDomNodeByID( nodeID );
```		  
### c. shrinkAllNode
收起树的所有节点，仅仅显示根节点。
-参数：无
-返回：true
-举例：
```javascript
	  QTTCtrl.shrinkAllNode();
```
### d. expandAllNode
展开树的所有节点。
-参数：无
-返回：true
-举例：
```javascript
	  QTTCtrl.expandAllNode();
```	  
### e. expandToNode
展开到指定的节点，指定节点的所有祖先节点以及兄弟节点都可见。
-参数: 
nodeID: 数字类型，节点的ID值。
或nodeArray: 数组类型，包含要展开的节点的ID。
-返回：
如果传入的参数是nodeID，展开成功返回true，展开失败返回false。
如果传入的参数是nodeArray，数组中所有ID对应的节点都展开成功，返回true，否则返回false。
一般情况下，展开失败则意味着相关的nodeID不存在。
-举例：
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.expandToNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.expandToNode( nodeArray );
```	  
### f. selectNode
标记指定的节点为选中状态，选中状态的样式定义请参考自定义样式。
-参数：nodeID: 数字类型，节点的ID值。
或nodeArray: 数组类型，包含要选中的节点的ID。
-返回：
如果传入的参数是nodeID，选中成功返回true，选中失败返回false。
如果传入的参数是nodeArray，数组中所有id对应的节点都选中成功，返回true，否则返回false。
一般情况下，选中失败则意味着相关的nodeID不存在。
-举例：
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.selectNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.selectNode( nodeArray );
```	  
### g. cancelSelectNode
取消指定的节点为选中状态。
-参数：nodeID: 数字类型，节点的ID值。
nodeArray: 数组类型，包含要取消的节点的ID。
-返回：
如果传入的参数是nodeID，取消成功返回true，取消失败返回false。
如果传入的参数是nodeArray，数组中所有id对应的节点都取消成功，返回true，否则返回false。
一般情况下，取消失败则意味着相关的nodeID不存在。
-举例：
```javascript
	  var nodeID = 3 ;
	  QTTCtrl.cancelSelectNode( nodeID );
	  
	  var nodeArray = [ 3 , 10 , 12 ] ;
	  QTTCtrl.cancelSelectNode( nodeArray );
```	  
### h. cancelAllSelectNode
取消所有节点的选中状态。
-参数：无
-返回：true
-举例：
```javascript
	  QTTCtrl.cancelAllSelectNode();
```	  
### i. updateTree
使用传入的数据重新生成TableTree。注意：调用之后，将建立新的nodeID。
-参数：treeData , JSON对象，具体结构参考前面的说明。
-返回：true
-举例：
```javascript
	  var treeData = {
		name:'rootNode',
		value:{},
		children:[
			{
				name:'childNode_1',
				value:{},
				children:[]
			},
			{
				name:'childNode_2',
				value:{},
				children:[]
			},
			{
				name:'childNode_3',
				value:{},
				children:[]
			}
		]
	  };
	  
	  QTTCtrl.updateTree( treeData );
```	  
### j. getTreeData
返回当前控件中的数据，也就是在updateTree时传入的参数值。
-参数：无
-返回：treeData , JSON对象，具体结构参考前面的说明。  
-举例：
```javascript
	var treeData = QTTCtrl.getTreeData();
```		
__注意__：
单独更改返回的treeData中的值，并不会改变当前树的树视图。
如果要改变某个节点的值，请使用editNode。
      
### k. addNode
新增节点到当前的QiangTableTree。
-参数：
     parentNodeID: 要新增的节点的父节点的NodeID
     newNodeObj: 新增的节点的内容，结构应该满足定义的节点结构。
-返回：
     如果指定的父节点存在，返回true，否则返回false。
-举例：
```javascript
	  var parentNodeID = 1 ;
	  var newNodeObj = {
		 name:'NewNode',
		 value:{},
		 children:[]
	  };
	  QTTCtrl.addNode( parentNodeID , newNodeObj );
```	
__注意__：
调用addNode之后，树的NodeID也将更新。
      
### l. editNode
编辑QiangTableTree的节点。
-参数：
     nodeID: 要修改节点的NodeID
     editedNodeObj: 修改的节点的内容，结构应该满足定义的节点结构，只能修改指定节点的name和value的值。要修改指定节点的子节点的信息，请使用addNode和deleteNode。
-返回：
如果指定的节点存在，返回true，否则返回false。

-举例：
```javascript
	  var nodeID = 1 ;
	  var editedNodeObj = {
		 name:'EditedNode',
		 value:{}
	  };
	  QTTCtrl.newNodeObj( nodeID , editedNodeObj );
```	  
### m. deleteNode
删除QiangTableTree的节点，删除指定的节点时，它的后代节点也将一并被删除。
-参数：
		nodeID: 要删除的节点的NodeID
-返回：
如果指定的节点存在，返回true，否则返回false。
-举例：
```javascript
	  var nodID = 5;
	  QTTCtrl.deleteNode( nodeID );
```
__注意__：
调用deleteNode之后，树的nodeID也将更新。
根据约定，不允许删除根节点。
	  
### n. findNode
查找满足条件的节点，默认情况下，QTT会匹配treeData中所有节点的name以及value中的属性值。你可以根据业务需要，在创建QTT对象时自定义查找行为。
-参数：
    keyword：要查找的内容，可以是字符串，也可以是数字类型。
-返回：
     resultArray：数组类型，返回满足匹配条件的节点的nodeID。
	  
-举例：
```javascript
	        var keyword = 'Football' ;
		var resultArray = QTTCtrl.findNode( keyword );
		
		//高亮显示查找结果
		QTTCtrl.highlightNode( resultArray );
		
		//展开到指定的节点
		QTTCtrl.expandToNode( resultArray );
```	  
### o. findNodeByName
与findNode的默认行为类似，只是匹配对象仅仅限定在节点的name属性。
-参数：
    keyword：要查找的内容，可以是字符串，也可以是数字类型。
-返回：
    resultArray：数组类型，返回满足匹配条件的节点的nodeID。
      
-举例：
```javascript
	    var keyword = 'BasketBall' ;
	    var resultArray = QTTCtrl.findNodeByName( keyword );
```	  
### p. findNodeByValue
与findNode的默认行为类似，只是匹配对象仅仅限定在节点的value属性。
-参数：
   keyword：要查找的内容，可以是字符串，也可以是数字类型。
-返回：
    resultArray：数组类型，返回满足匹配条件的节点的nodeID。
	  
-举例：
```javascript
	    var value = 1982 ;
	    var resultArray = QTTCtrl.findNodeByValue( value );
```		
### q. highlightNode
高亮显示指定的节点，高亮状态的样式定义请参考自定义样式。
高亮显示指定的节点之前，QTT会先清除视图中原来的所有高亮显示的节点。
-参数：
     nodeIDArray：数组类型，包含要高亮显示的节点的nodeID。
-返回：true
	   
-举例：
```javascript
	   var nodeIDArray = [ 1 , 3 , 12] ;
	   QTTCtrl.highlightNode( nodeIDArray );
```	   
### r. getNodeIdByDomObj
根据指定的树节点(.qttNode)的DOM对象，返回对应的Node节点。
-参数：domOb，指定的DOM对象
-返回：nodeID，返回指定节点的nodeID，如果传入的DOM对象不是一个树节点，则返回-1。
-举例：
```javascript
	      $('#qiang-table-tree .t-text').click( function(){
		      var qttNode = $(this).closest( '.qttNode' );
		      var nodeID = QTTCtrl.getNodeIdByDomObj( qttNode.get(0) );
			  if( nodeID > 0 ){
				var nodeObj = QTTCtrl.getNodeByID( nodeID ) ;
				
				//Do something by nodeObj
				//...
				
			  } 
		  });
```	   
   
## 4. 自定义QiangTableTree
### 1. 行为定制
不同的业务类型，树节点包含的value属性值不一样，呈现方式、检索方式都存在差异。QiangTableTree在初始化时，支持呈现方式、检索方式的自定义。
行为定制在创建QiangTableTree对象是通过传入的option属性定义。
例如：我们希望在每个视图节点的名称前面增加一个星星图标，可以这样设置。
```javascript
   //Use Glyphicons to create a star icon before node name
   var createStarHTML = function( nodeObj ){
	   return '<span class="glyphicon glyphicon-star"></span>' ;
   }
   
   //Create QiangTableTree object
   var qttCtrl = window.QTT.qiangTableTree({
		createNodeIconHTML: createStarHTML
   });
```   
QiangTableTree可自定义的行为如下：
1. createNodeIconHTML
定义生成节点icon的内容，默认为一个返回空字符串的函数，也就是说，默认情况下，不生成节点icon的相关代码。
-参数：
     nodeObj：当前渲染的数据节点对象。

-举例：
```javascript
	   //Use Glyphicons to create a star icon before node name
	   var createStarHTML = function( nodeObj ){
		   return '<span class="glyphicon glyphicon-star"></span>' ;
	   }
	   
	   //Create QiangTableTree object
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeIconHTML: createStarHTML
	   });
```	  
2. createNodeNameHTML
定义生成节点name的内容，默认返回节点的名称。
-参数：
    nodeObj：当前渲染的数据节点对象。
-举例：
```javascript 
	   //Create QiangTableTree object
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeNameHTML: function( nodeObj ){
				var nameHTML = '' ;
				//if node is a team node, make it red
				if( nodeObj.value.isTeam ){
					nameHTML = '<span class="red-font">'+nodeObj.name+'</span>';
				}
				else{
					nameHTML = nodeObj.name ;
				}
				
				return nameHTML;
			};
	   });
```	   
3. createNodeBarHTML
定义在节点名称之后显示的内容，默认为一个返回空字符串的函数，也就是说，默认情况下，不生成节点bar的相关代码。
-参数：
	nodeObj：当前渲染的数据节点对象。
-举例：
假设我们需要在当前树节点上增加两个按钮，用于编辑当前节点的相关信息。
```javascript
		//Create QiangTableTree object
		var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeNameHTML: function( nodeObj ){
				var barHTML = '<span class="edit-btn" data-teamid="'+nodeObj.value.teamID+'" >编辑</span>' ;
				return barHTML;
			};
	    });
```
		
当然，我们希望只有当鼠标悬停到节点上时才显示'编辑'按钮，所以，还需要定义相关的样式。
```css
		.qiang-table-tree .tAction>.edit-btn{
			display:none;
		}
		.qiang-table-tree .tAction:hover>.edit-btn{
			display:inline-block;
		}
```				
4. createNodeValueHTML
定义在value区域展示的内容。
-参数：
	nodeObj：当前渲染的数据节点对象。
-举例：
```javascript
	    //Create QiangTableTree object
		var qttCtrl = window.QTTCtrl.qiangTableTree({
			createNodeValueHTML: function( nodeObj ){
				var valueHTML = '';
				var valueObj = nodeObj.value ;
				
				//假设我们要展示value中的value_1,value_2,value_3这几个属性值
				valueHTML =  '<li class="td-1">'+(valueObj.value_1  )+'</li>'
						   + '<li class="td-2">'+(valueObj.value_2  )+'</li>'
						   + '<li class="td-3">'+(valueObj.value_3  )+'</li>'
				
				return valueHTML;
			};
	    });
```		
当然，为了达到对齐效果，还应该设置相关样式。
```css
		.qiang-table-tree .td-1,
		.qiang-table-tree .td-2,
		.qiang-table-tree .td-3{
			width:12%;
			text-align:center;
		}
		.qiang-table-tree .td-3{
			color:#F00;
			font-weight:bold;
		}
```		
5. findNodeContent
定义QiangTableTree的匹配规则，因为不同的业务场景下，value对象包含的属性不一样，期望的查找规则也不一样。这个匹配规则决定了findNode函数的检索行为。
-参数：
       nodeObj：要检索的数据节点对象。
       keyword: 检索的关键字。
-返回：
       如果满足业务规则，匹配成功，则返回true，否则返回false。
-举例：
```javascript
       //假设我们希望调用QTTCtrl.findNode时，查找value对象中isTeam为true，并且name包含keyword的节点。
	   var qttCtrl = window.QTTCtrl.qiangTableTree({
			findNodeContent: function( nodeObj , keyword ){
				var result = false ;
				if( nodeObj.value.isTeam === true && nodeObj.name.indexOf( keyword ) >=0 ){
					result = true ;
				}
				return result;
			};
	    });
```  
### 2. 外观定制
QiangTableTree支持自定义的外观，可以定义的基本样式包括：线条颜色、字体颜色、悬挂的样式、选中的样式、高亮的样式等。
可以参考QiangTableTree/skin/default.css中的说明。
因为QiangTableTree支持自定义生成树节点中的HTML代码，所以，有关业务相关的样式(例如：.edit-btn)，建议在业务的样式表(例如：worldcupteam.css)中定义。
   
## 5. 感谢&欢迎反馈意见。
如果您在使用QiangTableTree中有任何疑问或建议，欢迎联系：[我的邮箱](mailto:zhanglai5678@163.com)

######If you have any advice, welcome to email to me.[My Email](mailto:zhanglai5678@163.com)

