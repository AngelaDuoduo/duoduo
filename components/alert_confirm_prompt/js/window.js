define(['jquery','jqueryUI','widget'], function($, $UI, widget) {
	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
			content: "",
			title: "Alert",
			y: 300,
			x: 600,			
			isDraggable: true,
			hasMask: true,		
			hasCloseBtn: false,
			handler4AlertBtn: null,
			handler4CloseBtn: null,				
			handler4ConfirmBtn: null,
			handler4CancelBtn: null,
			isPromptInputPassword: false,
			defaultValue4PromptInput: "",
			maxLength4PromptInput: 10,
			handler4PromptBtn: null
		};
	};
	Window.prototype = $.extend({}, new widget.Widget(),{
		//this是window对象
		
		renderUI: function() {
			var footerContent = "";
			switch(this.cfg.winType) {
				case "alert":
					footerContent = "<input type='button' class='btn btn-primary btn-alert' value='confirm'/>";
					break;
				case "confirm":
					footerContent = "<input type='button' class='btn btn-primary btn-confirm' value='confirm'/>\
									 <input type='button' class='btn btn-primary btn-cancel' value='cancel' />";
					break;
				case "prompt":
					if(this.cfg.isPromptInputPassword) {
						this.cfg.content += "<br /><input type='password' value='" + this.cfg.defaultValue4PromptInput + "'/>"; 											
					} else{
						this.cfg.content += "<br /><input autofocus type='text' value='" + this.cfg.defaultValue4PromptInput + "'/>";
					};
					footerContent = "<input type='button' class='btn btn-primary btn-submit' value='submit'/>";
					break;
					
			};
			this.boundingBox = $("<div class='window'>\
									<div class='window-header'>" + this.cfg.title + "</div>\
									<div class='window-body'>" + this.cfg.content+ "</div>\
									<div class='window-footer'>" + footerContent + "</div>\
								</div>");
		
			if (this.cfg.hasCloseBtn){				
				$("<span class='close'>X</span>").appendTo(this.boundingBox);
			}
			if (this.cfg.hasMask) {
				this._mask = $("<div id='cover'></div>");
				this._mask.appendTo(document.body);
			}			
		},
		bindUI: function() {
			var that = this;
			if (this.cfg.handler4AlertBtn) {
				this.on("alert", this.cfg.handler4AlertBtn);
			}
			if (this.cfg.handler4ConfirmBtn) {
				this.on("confirm", this.cfg.handler4ConfirmBtn);
			}
			if (this.cfg.handler4CancelBtn) {
				this.on("cancel", this.cfg.handler4CancelBtn);
			}
			if (this.cfg.handler4CloseBtn){
				this.on("close", this.cfg.handler4CloseBtn);
			}
			if (this.cfg.handler4SubmitBtn){
				this.on("submit", this.cfg.handler4SubmitBtn);
			}
			this.boundingBox.delegate(".btn-alert", "click", function() {
				that.fire("alert");
				that.destroy();
			}).delegate(".close", "click", function() {
				that.fire("close");
				that.destroy();
			}).delegate(".btn-confirm", "click", function() {
				that.fire("confirm");
				that.destroy();
			}).delegate(".btn-cancel", "click", function() {
				that.fire("cancel");
				that.destroy();
			}).delegate(".btn-submit", "click", function() {
				var value = $("input[type='text']").val();
				that.fire("submit",[value,]);
				that.destroy();
			});
			
		},
		syncUI: function() {
			this.boundingBox.css({
				width: this.cfg.width + "px",
				height: this.cfg.height + "px",
				left: (this.cfg.x || (window.innerWidth - this.cfg.width) / 2) + "px",
				top: (this.cfg.y || (window.innerHeight - this.cfg.height) / 2) + "px"
			});
			
			if (this.cfg.isDraggable){
				this.boundingBox.draggable({
					handle: ".window-header"
				});
			}
		},
		destructor: function() {
			this.cfg.hasMask && this._mask.remove();
		},
		alert: function(cfg) {
			$.extend(this.cfg, cfg, {winType: "alert"});
			this.render();			
			return this;			
		},
		confirm: function(cfg) {
			$.extend(this.cfg, cfg, {winType: "confirm"});
			this.render();
			return this;
		},
		prompt: function(cfg) {
			$.extend(this.cfg, cfg, {winType: "prompt"});
			this.render();
			return this;
		}
	});
	
	return {
		Window: Window
	}
});