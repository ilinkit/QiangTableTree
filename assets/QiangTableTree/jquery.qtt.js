window.QTT = window.QTT || {};

window.QTT.qiangTableTree = function( option ){
	var QTT = {} ;           
	QTT.treeData = {};      
	QTT.treeBox = null ;    
	QTT.treeContainer = null ;    
	QTT.nodeArray = [];
	QTT.nodeIndex = 0 ;     
	
	var default_option = {
		createNodeIconHTML: function( nodeObj ){
			return '';
		}, 
		createNodeNameHTML: function( nodeObj ){
			return nodeObj.name ;
		},		
		createNodeBarHTML: function( nodeObj ){
			return '' ;
		},    
		createNodeValueHTML: function( nodeObj ){
			return '' ;
		},
		findNodeContent: function( nodeObj , keyword ){
			return _findNodeContent( nodeObj , keyword );
		}
	};
	
	var _createChildrenHTML = function( childrenObj , nodeLevel , parentNodeID ){
			var  childrenHTML = '' ;
			
			if( Object.prototype.toString.call( childrenObj ) === '[object Array]' ){
				var  lastIndex = childrenObj.length - 1;
				
				$.each( childrenObj , function( index , nodeObj ){
					QTT.nodeArray[QTT.nodeIndex] = nodeObj ;
					nodeObj.nodeID = QTT.nodeIndex ;
					nodeObj.parentID = parentNodeID ;
					nodeObj.index = index ;

					QTT.nodeIndex = QTT.nodeIndex+1;
					
					var nodeChildren = nodeObj.children ;
					var level = nodeLevel+1 ;

					var nodeIconHTML = bag.createNodeIconHTML( nodeObj );			
					var nodeNameHTML = bag.createNodeNameHTML( nodeObj );			
					var nodeBarHTML = bag.createNodeBarHTML( nodeObj ); 
					var nodeValueHTML = bag.createNodeValueHTML( nodeObj );
					
					var nodeChildrenHTML = _createChildrenHTML( nodeChildren , level, nodeObj.nodeID );
					
					var nodeIsLeaf = nodeChildren.length===0 ? ' qttLeaf' : '' ;
					var nodeIsLast = ( index === lastIndex ) ? ' last-child' : '' ;
					
					var nodeHTML = '<div id="qtt_'+nodeObj.nodeID+'" class="qttNode'+nodeIsLeaf+nodeIsLast+'">'
							+'<div class="qttItem">'
							+'<div class="tLabel">'
							+'<div class="tAction">'
							+'<span class="t-icon">'+nodeIconHTML+'</span>' 
							+'<span class="t-text">'+nodeNameHTML+'</span>'
							+nodeBarHTML
							+'</div>'
							+'</div>'
							+'<ul class="tValue">' 
							+nodeValueHTML
							+'</ul>'
							+'</div>'
							+'<div class="qttBox Level-'+level+'">'  //定义当前子容器的层级
							+ nodeChildrenHTML
							+'</div>'
							+'</div>';
					  
				childrenHTML = childrenHTML + nodeHTML ;
				
			});
		}

		return childrenHTML;
	};

	var _createTreeHTML = function( treeData ){
		var treeHTML = '' ;
		var createChildrenObj = [ treeData ] ;   
		treeHTML = _createChildrenHTML( createChildrenObj , -1 , -1 );
		return treeHTML;			
	}

	var _updateTree = function( treeData ){
		QTT.nodeArray = [];     
		QTT.nodeIndex = 0 ;     

		QTT.treeData = treeData ;
		var treeHTML = _createTreeHTML( QTT.treeData );
		QTT.treeContainer.html( treeHTML );

		QTT.treeContainer.children().eq(0).addClass( 'ROOT' );

		_resetPercentWidth();
		return true;
	}
	
	var _resetPercentWidth = function(){
		var h_tLabel_w = QTT.treeBox.find('.treeHeaderBox .tLabel').eq(0).width();
		
		var h_tdList = QTT.treeBox.find('.treeHeaderBox .tValue>li');
		var td_width_array = [];
		h_tdList.each(  function( index , obj ){
			var tdObjWidth = obj.offsetWidth;
			td_width_array.push( tdObjWidth );
		});

		QTT.treeContainer.find( '.tLabel' ).css( 'width' , h_tLabel_w + 'px'  );
		QTT.treeContainer.find( '.tValue' ).css( 'left' , h_tLabel_w + 'px'  );

		$.each( td_width_array , function( index , obj ){
			var td_str = '.td-' + (index+1);
			var td_obj = QTT.treeContainer.find( td_str );
			td_obj.css( 'width' , obj + 'px' );
		});
		
		return ;
	}

	var _expandAllNode = function( ){
		QTT.treeContainer.find( '.qttNode' ).removeClass( 'shrink' );
		return true;
	}

	var _shrinkAllNode = function( ){
		QTT.treeContainer.find( '.qttNode' ).addClass( 'shrink' );
		return true;
	}

	var _findPathNodeID = function( nodeID ){
		var pathIDArray = [];
		var currentNode = QTT.nodeArray[ nodeID ];
		if( currentNode ){
			_createNodePath( currentNode , pathIDArray );
		}
		
		return pathIDArray;
	}
	var _createNodePath = function( currentNode , pathIDArray ){
		if( currentNode.parentID < 0 ){
			return ;
		}
		var parentNode =QTT.nodeArray[ currentNode.parentID ];
		pathIDArray.push( parentNode.nodeID );
		
		if( parentNode.nodeID !== 0 ){
			_createNodePath( parentNode , pathIDArray );
		}
		return ;
	}	

	var _findNodeContent = function( treeNode , keyword ){
		var isMatched = false ;
		if( treeNode.name.indexOf( keyword ) >= 0 ){
			isMatched = true ;
		}
		else{
			var valueObj = treeNode.value ;
			for( var name in valueObj ){
				if( valueObj.hasOwnProperty( name ) ){
					if( valueObj[name].indexOf && valueObj[name].indexOf( keyword ) >= 0 ){
						isMatched = true ;
						break ;
					}
					else if( valueObj[name] == keyword ){
						isMatched = true ;
						break ;
					}
				}
			}
		}
		return isMatched;
	}
	var _findNodeName = function( treeNode , keyword ){
		var isMatched = false ;
		if( valueObj[name].indexOf && treeNode.name.indexOf( keyword ) >= 0 ){
			isMatched = true ;
		}
		return isMatched;
	}
	var _findNodeValue = function( treeNode , keyword ){
		var isMatched = false ;
		var valueObj = treeNode.value ;
		for( var name in valueObj ){
			if( valueObj.hasOwnProperty( name ) ){
				if( valueObj[name].indexOf || valueObj[name].indexOf( keyword ) >= 0 ){
					isMatched = true ;
					break ;
				}
			}
			else if( valueObj[name] == keyword ){
				isMatched = true ;
				break ;
			}
		}
		return isMatched;
	}

	var _findNode = function( keyword , resultArray ){
		$.each( QTT.nodeArray , function( index , treeNode ){
			if( bag.findNodeContent( treeNode , keyword ) ){
				resultArray.push( treeNode.nodeID );				
			}
		});
		return ;
	}

	var _findNodeByName = function(  keyword , resultArray ){
		$.each( QTT.nodeArray , function( index , treeNode ){
			if( _findNodeName( treeNode , keyword ) ){
				resultArray.push( treeNode.nodeID );				
			}
		});
		return ;
	}

	var _findNodeByValue = function(  keyword , resultArray ){
		$.each( QTT.nodeArray , function( index , treeNode ){
			if( _findNodeValue( treeNode , keyword ) ){
				resultArray.push( treeNode.nodeID );				
			}
		});
		return ;
	}	

	var _clearHighlight = function( ){
		QTT.treeContainer.find( '.qttNode' ).removeClass( 'highlight' );
		return ;
	}

	var _clearSelected = function( ){
		QTT.treeContainer.find( '.qttNode' ).removeClass( 'selected' );
		return ;
	}

	var _expandToNode = function( nodeID ){
		var pathNodeArray = _findPathNodeID( nodeID );
		if( pathNodeArray.length > 0 ){
			$.each( pathNodeArray , function( index , nodeID ){
				QTT.treeContainer.find( '#qtt_' + nodeID ).removeClass( 'shrink' );
			});
			return true ;
		}
		return false ;
	}

	if( !(option.TreeBox) || (option.TreeBox.length===0) ){
		return null ;
	}
	
	var bag = $.extend( true, {} , default_option , option );
	QTT.treeBox = bag.TreeBox ;
	QTT.treeContainer = bag.TreeBox.find( '.QTTContainer' ).eq(0) ;
	
	QTT.treeContainer.delegate( '.tLabel' , 'click' ,  function(){
		var _self = $(this);
		var qttNode = _self.closest( '.qttNode' );
		
		if( !(qttNode.hasClass( 'qttLeaf' )) ){	
			qttNode.toggleClass( 'shrink' );	
		}
		return ;
	});
	
	var that = {};
	that.addNode = function( parentNodeID , newNodeObj ){
		var parentNode = QTT.nodeArray[parentNodeID];
		if( parentNode ){
			parentNode.children.push( newNodeObj );
			_updateTree( QTT.treeData );
			return true;
		}
		return false;
	};

	that.editNode = function( nodeID , newNodeObj ){
		var currentNode = QTT.nodeArray[nodeID];
		if( currentNode ){
			currentNode.name = newNodeObj.name ;
			currentNode.value = newNodeObj.value ;

			_updateTree( QTT.treeData );

			return true ;
		}
		
		return false ;
	};

	that.deleteNode = function( nodeID ){
		if( nodeID === 0 ){
			return false ;
		}
		var currentNode = QTT.nodeArray[nodeID];
		if( currentNode ){
			var parentNode = QTT.nodeArray[ currentNode.parentID ];
			parentNode.children.splice( currentNode.index , 1 );
			_updateTree( QTT.treeData );
			
			return true ;
		}
		
		return false ;
	};
	that.expandAllNode = function(){
		return _expandAllNode( );
	};

	that.shrinkAllNode = function(){
		return _shrinkAllNode( );
	};

	that.expandToNode = function( nodeID ){
		var result = true ;
		_shrinkAllNode( );
		if( Object.prototype.toString.call( nodeID )  === '[object Array]' ){
			var nodeArray = nodeID;
			$.each( nodeArray , function( index , obj ){
				result = _expandToNode( obj ) && result ;
			});
		}
		else{
			result = _expandToNode( nodeID );
		}

		return result ;
	};

	that.selectNode = function( nodeID ){
		var result = true ;
		if( Object.prototype.toString.call( nodeID )==='[object Array]' ){
			var nodeIDList = nodeID ;
			var len = nodeIDList.length ;
			for( var i=0; i<len; i++ ){
				var ID = nodeIDList[i];
				var currentNode = QTT.nodeArray[ID];
				var selectedOK = false ;
				if( currentNode ){
					QTT.treeContainer.find( '#qtt_' + ID ).addClass( 'selected' );
					selectedOK = true ;
				}							
				result = selectedOK && result ;
			}
		}
		else{
			var currentNode = QTT.nodeArray[nodeID];
			if( currentNode ){
				QTT.treeContainer.find( '#qtt_' + nodeID ).addClass( 'selected' );
				result = true ;
			}
			else{
				result = false ;					
			}
		}

		return result ;			
	};  

	that.cancelSelectNode = function( nodeID ){
		var result = true ;
		if( Object.prototype.toString.call( nodeID )==='[object Array]' ){
			var nodeIDList = nodeID ;
			var len = nodeIDList.length ;
			for( var i=0; i<len; i++ ){
				var ID = nodeIDList[i];
				var currentNode = QTT.nodeArray[ID];
				var cancelOK = false ;
				if( currentNode ){
					QTT.treeContainer.find( '#qtt_' + ID ).removeClass( 'selected' );
					cancelOK = true ;
				}
				result = cancelOK && result ;
			}
		}
		else{
			var currentNode = QTT.nodeArray[nodeID];
			if( currentNode ){
				QTT.treeContainer.find( '#qtt_' + nodeID ).removeClass( 'selected' );
				result = true ;
			}
			else{
				result = false ;					
			}
		}

		return result ;	
	}
	that.cancelAllSelectNode = function(){
		_clearSelected();
		return true;
	}
	that.updateTree = function( treeData ){
		_updateTree( treeData );
		return true;
	};
	that.getTreeData = function( ){
		return QTT.treeData ;			
	};
	that.getNodeByID = function( nodeID ){
		return QTT.nodeArray[nodeID];
	}
	that.getDomNodeByID = function( nodeID ){
		return document.getElementById( '#qtt_' + nodeID );
	}
	that.getNodeIdByDomObj = function( domObj ){
		var $Obj = $( domObj );
		var domId = $Obj.attr( 'id' );
		var nodeID = -1 ;
		if( domId && domId.indexOf( 'qtt_' ) === 0 ){
			nodeID = parseInt( domId.slice( 4 ) );
		}
		return nodeID;
	}
	that.findNode = function( keyword ){
		var resultArray = [];
		_findNode( keyword , resultArray );
		return resultArray;		
	};          
	that.findNodeByName = function( keyword ){
		var resultArray = [];
		_findNodeByName( keyword , resultArray );
		return resultArray;
	};     
	that.findNodeByValue = function( keyword ){
		var resultArray = [];
		_findNodeByValue( keyword , resultArray );
		return resultArray;
	};    
	that.highlightNode = function( nodeIDArray ){
		_clearHighlight( );
		$.each( nodeIDArray , function( index , nodeID ){
			QTT.treeContainer.find( '#qtt_' + nodeID ).addClass( 'highlight' );
		});
		
		return true;
	};
	
	that.resizeFn = function(){
		_resetPercentWidth();
	}
   
	return that ;	
}; //end of qiangTableTree

