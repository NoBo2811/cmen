/* Shared site interactions — mobile menu + FAQ accordion */
(function(){
  // Mobile menu
  document.addEventListener('click', function(e){
    var t = e.target.closest('[data-sub-toggle]');
    if(t){
      e.preventDefault();
      var sub = t.closest('.mrow').nextElementSibling;
      var open = sub.classList.toggle('open');
      t.classList.toggle('open', open);
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      return;
    }
    if(e.target.closest('[data-menu-open]')){ document.querySelector('.mobile-menu')?.classList.add('open'); }
    if(e.target.closest('[data-menu-close]')){ document.querySelector('.mobile-menu')?.classList.remove('open'); }
    if(e.target.closest('.mobile-menu a.mlink')){ document.querySelector('.mobile-menu')?.classList.remove('open'); }
  });
  // FAQ accordion
  document.addEventListener('click', function(e){
    var q = e.target.closest('.faq-q');
    if(!q) return;
    var item = q.closest('.faq-item');
    var ans = item.querySelector('.faq-a');
    var isOpen = item.classList.contains('open');
    // close siblings
    item.parentElement.querySelectorAll('.faq-item.open').forEach(function(it){
      if(it!==item){ it.classList.remove('open'); it.querySelector('.faq-a').style.maxHeight=null; }
    });
    if(isOpen){ item.classList.remove('open'); ans.style.maxHeight=null; }
    else { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
  });
})();
