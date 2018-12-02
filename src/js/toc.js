import $ from 'jquery';

export default function update_id() {
  $(".toc .toc-item li span a").each(function () {
    var href = $(this).attr("href").toLowerCase().replace(" ", "-").replace(/[^#-\w\s]/gi, '-').replace("--", "-").replace(/[^\w\s]$/gi, "");
    $(this).attr("href", href);
  });
};