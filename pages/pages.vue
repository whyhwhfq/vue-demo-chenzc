<template>
    <div class="news-item">
        <ul class="newsList">
            #set($articles = '')
            #set($articles = $!{articleTool.list(4935,'','',0,0,0,'',true,0,7)})
            #foreach($article in $articles)
            <li>
                #if($article.currentYear=='0')
                <span>[$!{article.time6}]</span>
                <a href="$!{article.url}" target="_blank" title="$!{article.title}">$!{article.title}</a>
                #else
                <span>[$!{article.time6}]</span>
                <a href="$!{article.url}" target="_blank" title="$!{article.title}" style="width: 200px;">$!{article.title}</a>
                #end
            </li>
            #end
        </ul>
        <div class="moreDiv"> <a href="http://news.mysteel.com/article/p-4935-------------1.html" target="_blank" class="more">????ก่?></a> </div>
    </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>