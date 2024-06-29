/**
 * Version 1 compatibility plugin
 *
 * Patches commands and BBCodes set with
 * command.set and bbcode.set to wrap DOM
 * node arguments in jQuery objects.
 *
 * Should only be used to ease migrating.
 */
(function (kteditor, $) {
	'use strict';

	var plugins = kteditor.plugins;

	/**
	 * Patches a method to wrap and DOM nodes in a jQuery object
	 * @private
	 */
	function patchMethodArguments(fn) {
		if (fn._ktePatched) {
			return fn;
		}

		var patch = function () {
			var args = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];

				if (arg && arg.nodeType) {
					args.push($(arg));
				} else {
					args.push(arg);
				}
			}

			return fn.apply(this, args);
		};

		patch._ktePatched = true;
		return patch;
	}

	/**
	 * Patches a method to wrap any return value in a jQuery object
	 * @private
	 */
	function patchMethodReturn(fn) {
		if (fn._ktePatched) {
			return fn;
		}

		var patch = function () {
			return $(fn.apply(this, arguments));
		};

		patch._ktePatched = true;
		return patch;
	}

	var oldSet = kteditor.command.set;
	sceditor.command.set = function (name, cmd) {
		if (cmd && typeof cmd.exec === 'function') {
			cmd.exec = patchMethodArguments(cmd.exec);
		}

		if (cmd && typeof cmd.txtExec === 'function') {
			cmd.txtExec = patchMethodArguments(cmd.txtExec);
		}

		return oldSet.call(this, name, cmd);
	};

	if (plugins.bbcode) {
		var oldBBCodeSet = plugins.bbcode.bbcode.set;
		plugins.bbcode.bbcode.set = function (name, bbcode) {
			if (bbcode && typeof bbcode.format === 'function') {
				bbcode.format = patchMethodArguments(bbcode.format);
			}

			return oldBBCodeSet.call(this, name, bbcode);
		};
	};

	var oldCreate = kteditor.create;
	kteditor.create = function (textarea, options) {
		oldCreate.call(this, textarea, options);

		if (textarea && textarea._sceditor) {
			var editor = textarea._sceditor;

			editor.getBody = patchMethodReturn(editor.getBody);
			editor.getContentAreaContainer =
				patchMethodReturn(editor.getContentAreaContainer);
		}
	};
}(kteditor, jQuery));
