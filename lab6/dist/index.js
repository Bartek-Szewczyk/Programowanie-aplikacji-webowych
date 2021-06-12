/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "./src/localstoragestore.ts":
/*!**********************************!*\
  !*** ./src/localstoragestore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageStore": () => (/* binding */ LocalStorageStore)
/* harmony export */ });
class LocalStorageStore {
    deleteNote(id) {
        let notesValue = localStorage.getItem('notes');
        let notesOld = JSON.parse(notesValue);
        let notesNew = [];
        for (let note of notesOld) {
            if (note.id !== id)
                notesNew.push(note);
        }
        localStorage.setItem('notes', JSON.stringify(notesNew));
    }
    addNote(note) {
        let notesValue = localStorage.getItem('notes');
        let notes = JSON.parse(notesValue);
        if (!notes)
            notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    getNotes() {
        let notesValue = localStorage.getItem('notes');
        let notes = JSON.parse(notesValue);
        return notes;
    }
}


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./src/guid.ts");

class Note {
    constructor(title, content) {
        this.id = _guid__WEBPACK_IMPORTED_MODULE_0__.Guid.newGuid();
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
}


/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteBoard": () => (/* binding */ NoteBoard)
/* harmony export */ });
/* harmony import */ var _localstoragestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstoragestore */ "./src/localstoragestore.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/note.ts");


class NoteBoard {
    constructor() {
        this.storage = new _localstoragestore__WEBPACK_IMPORTED_MODULE_0__.LocalStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButton();
        this.notesContainer = (document.createElement('div'));
        document.body.append(this.notesContainer);
    }
    addTitleInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Title:";
        const titleInput = (document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    }
    addContentInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Content:";
        const contentInput = (document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    }
    addButton() {
        const div = (document.createElement('div'));
        const addButton = (document.createElement('button'));
        addButton.textContent = "Add";
        addButton.addEventListener('click', () => {
            let title = document.getElementById('title').value;
            let content = document.getElementById('content').value;
            this.storage.addNote(new _note__WEBPACK_IMPORTED_MODULE_1__.Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    }
    refreshList() {
        this.notesContainer.innerHTML = '';
        const notes = this.storage.getNotes();
        if (!notes)
            return;
        notes.forEach((item) => {
            const titleDiv = (document.createElement('div'));
            titleDiv.innerHTML = item.title;
            const contentDiv = (document.createElement('div'));
            contentDiv.innerHTML = item.content;
            const removeBtn = (document.createElement('button'));
            removeBtn.textContent = "Remove";
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.storage.deleteNote(id);
                this.refreshList();
            });
            this.notesContainer.appendChild(titleDiv);
            this.notesContainer.appendChild(contentDiv);
            this.notesContainer.appendChild(removeBtn);
            this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteboard */ "./src/noteboard.ts");

let board = new _noteboard__WEBPACK_IMPORTED_MODULE_0__.NoteBoard();
board.refreshList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3VpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxzdG9yYWdlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdGVib2FyZC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI4QjtBQUN2QjtBQUNQO0FBQ0Esa0JBQWtCLCtDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndEO0FBQzFCO0FBQ3ZCO0FBQ1A7QUFDQSwyQkFBMkIsaUVBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVDQUFJO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7OztVQ3JFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ053QztBQUN4QyxnQkFBZ0IsaURBQVM7QUFDekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3VpZCB7XHJcbiAgICBzdGF0aWMgbmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUge1xyXG4gICAgZGVsZXRlTm90ZShpZCkge1xyXG4gICAgICAgIGxldCBub3Rlc1ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XHJcbiAgICAgICAgbGV0IG5vdGVzT2xkID0gSlNPTi5wYXJzZShub3Rlc1ZhbHVlKTtcclxuICAgICAgICBsZXQgbm90ZXNOZXcgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBub3RlIG9mIG5vdGVzT2xkKSB7XHJcbiAgICAgICAgICAgIGlmIChub3RlLmlkICE9PSBpZClcclxuICAgICAgICAgICAgICAgIG5vdGVzTmV3LnB1c2gobm90ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzTmV3KSk7XHJcbiAgICB9XHJcbiAgICBhZGROb3RlKG5vdGUpIHtcclxuICAgICAgICBsZXQgbm90ZXNWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIGxldCBub3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZSk7XHJcbiAgICAgICAgaWYgKCFub3RlcylcclxuICAgICAgICAgICAgbm90ZXMgPSBbXTtcclxuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzKSk7XHJcbiAgICB9XHJcbiAgICBnZXROb3RlcygpIHtcclxuICAgICAgICBsZXQgbm90ZXNWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIGxldCBub3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi9ndWlkXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2VTdG9yZSB9IGZyb20gXCIuL2xvY2Fsc3RvcmFnZXN0b3JlXCI7XHJcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RlQm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVN0b3JlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUaXRsZUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb250ZW50SW5wdXQoKTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMubm90ZXNDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMubm90ZXNDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgYWRkVGl0bGVJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGFkZENvbnRlbnRJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJDb250ZW50OlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRJbnB1dCA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcclxuICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50SW5wdXQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGFkZEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XHJcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5hZGROb3RlKG5ldyBOb3RlKHRpdGxlLCBjb250ZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoTGlzdCgpIHtcclxuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5zdG9yYWdlLmdldE5vdGVzKCk7XHJcbiAgICAgICAgaWYgKCFub3RlcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIG5vdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpdGVtLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGVOb3RlKGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBOb3RlQm9hcmQgfSBmcm9tIFwiLi9ub3RlYm9hcmRcIjtcclxubGV0IGJvYXJkID0gbmV3IE5vdGVCb2FyZCgpO1xyXG5ib2FyZC5yZWZyZXNoTGlzdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9