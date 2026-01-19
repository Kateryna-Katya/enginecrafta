document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
      const parentElement = trigger.closest('.faq-acc-el');
      const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
      const svg = trigger.querySelector('svg');
      const isOpen = parentElement.classList.contains('open');

      if (!isOpen) {
          parentElement.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          svg.innerHTML = '   <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6583 0.925049L0.0867403 26.8364C-0.0912045 27.2054 0.0133891 27.6795 0.320378 27.8944C0.53364 28.0437 0.797161 28.0322 1.00091 27.8665L10.0557 20.4258C12.4369 18.4688 15.5666 18.4688 17.9478 20.4258L26.9985 27.8649C27.2906 28.106 27.6886 28.0158 27.8882 27.6631C28.0282 27.4154 28.0377 27.0939 27.9113 26.8364L15.3329 0.925049C14.8996 0.0343266 13.9501 -0.26586 13.2112 0.25742C12.983 0.419815 12.7928 0.649467 12.6583 0.925049Z" fill="#FF4DFF" />';
      } else {
          parentElement.classList.remove('open');
          panel.style.maxHeight = '0';
          svg.innerHTML = '   <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6583 27.075L0.0867403 1.16365C-0.0912045 0.794562 0.0133891 0.320494 0.320378 0.105606C0.53364 -0.0436682 0.797161 -0.0321856 1.00091 0.133492L10.0557 7.57422C12.4369 9.53118 15.5666 9.53118 17.9478 7.57422L26.9985 0.135132C27.2906 -0.106002 27.6886 -0.0157819 27.8882 0.336898C28.0282 0.584594 28.0377 0.906107 27.9113 1.16365L15.3329 27.075C14.8996 27.9657 13.9501 28.2659 13.2112 27.7426C12.983 27.5802 12.7928 27.3505 12.6583 27.075Z" fill="white" />';
      }
  });
});