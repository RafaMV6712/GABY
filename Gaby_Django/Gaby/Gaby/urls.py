from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'app.views.index', name='index'),
    url(r'^login$', 'app.views.login', name='login'),
    url(r'^academia/$', 'app.views.academia', name='academia'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
 