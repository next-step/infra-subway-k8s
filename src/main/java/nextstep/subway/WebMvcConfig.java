package nextstep.subway;


import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.filter.ShallowEtagHeaderFilter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.Filter;
import java.util.concurrent.TimeUnit;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        CacheControl jsCacheControl = CacheControl
                .noCache()
                .cachePrivate();

        registry
                .addResourceHandler("/**/*.js")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(jsCacheControl);

        CacheControl cssCacheControl = CacheControl
                .maxAge(365, TimeUnit.DAYS);

        registry
                .addResourceHandler("/**/*.css")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(cssCacheControl);
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean(){
        FilterRegistrationBean registration = new FilterRegistrationBean();
        Filter etagHeaderFilter = new ShallowEtagHeaderFilter();
        registration.setFilter(etagHeaderFilter);
        registration.addUrlPatterns("/*");
        return registration;
    }
}