var project_card_stats = document.getElementsByClassName('project_card__stats__2ANe4');
var impact_score;
var impact_index_button = document.createElement('span');
    impact_index_button.innerHTML = 'class="special-plugin-button"';
    impact_index_button.className = "button special-plugin-button";
    impact_index_button.dataset.name = plugin_name;

    project_card_stats.parentElement.insertAdjacentElement('beforeend',p);
    p.querySelector('a').addEventListener('click',clickHandler,true);