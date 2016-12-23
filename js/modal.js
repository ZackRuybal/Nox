// http://codepen.io/ettrics/pen/Jdjdzp/?editors=0010 used for a jumping off point and inspiration
var Modal = (function() {
    var trigger = $qsa('.modalTrigger');
    var modals = $qsa('.modal');
    var modalsbg = $qsa('.modalBg');
    var content = $qsa('.modalContent');
    var closer = $qsa('.modalClose');

    var win = window;
    var isOpen = false;
    var contentDelay = 400;
    var len = trigger.length;

    function $qsa(el) {
        return document.querySelectorAll(el);
    }

    var getId = function(event) {
        event.preventDefault();
        var self = this;
        var modalId = self.dataset.modal;
        var len = modalId.length;
        var modalIdTrimmed = modalId.substring(1, len);
        var modal = document.getElementById(modalIdTrimmed);
        makeDif(self, modal);
    };
    var makeDiv = function(self, modal) {
        var fakedif = document.getElementById('modalTemp');
        if (fakediv === null) {
            var dif = document.createElement('div');
            div.id = 'modalTemp';
            self.appendChild(div);
            moveTrig(self, modal, div);
        }
    };
    var moveTrig = function(trig, modal, div) {
        var trigProps = trig.getBoundingClientRect();
        var m = modal;
        var mProps = m.querySelector('.modalContent').getBoundingClientRect();
        var transX, transY, scaleX, scaleY;
        var xc = win.innerWidth / 2;
        var yc = win.innerHeight / 2;

        trig.classList.add('modalTrigger--active');
        scaleX = mProps.width / trigProps.width;
        scaleY = mProps.height / trigProps.height;
        scaleX = scaleX.toFixed(3);
        scaleY = scaleY.toFixed(3);

        transX = Math.round(xc - trigProps.left - trigProps.width / 2);
        transY = Math.round(yc - trigProps.top - trigProps.height / 2);

        if (m.classList.contains('modal--align-top')) {
            transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
        }
        trig.style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
        trig.style.webkitTransform = 'translate(' + transX + 'px, ' + transY + 'px)';
        div.style.transform = 'scale(' + scaleX + ',' + scaleY + ')';
        div.style.webkitTransform = 'scale(' + scaleX + ',' + scaleY + ')';

        window.setTimeout(funciton() {
            window.requestAnimationFrame(function() {
                open(m, div);
            });
        }, contentDelay);
    };

    var open = function(m,div) {
        if (!isOpen) {
            var content = m.querySelector('.modalContent');
            m.classList.add('modal--active');
            content.classList.add('modalContent--active');

            content.addEventListener('transitioned', hideDiv, false);

            isOpen = true;
        }
        function hideDiv() {
            div.style.opacity = '0';
            content.removeEventListener('transitioned', hideDiv, false);
        }
    };

    var close = function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var target = event.target;
        var div = document.getElementById('modalTemp');

        if(isOpen && target.classList.contains('modalBg') || target.classList.contains('modalClose')) {
            div.style.opacity = '1';
            div.removeAttribute('style');

            for (var i = 0; i < len; i++) {
                modals[i].classList.remove('modal--active');

            }
        }
    }
})
