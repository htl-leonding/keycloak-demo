package at.htl;

import io.quarkus.security.Authenticated;
import io.quarkus.security.runtime.interceptor.check.SecurityCheck;
import io.smallrye.config.SecretKeysConfigSourceInterceptor;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import java.util.List;

@Path("/hello-resteasy")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @GET
    @Path("user")
    @Authenticated
    public List<String> loggedInUser() {
        return List.of("a", "b", "c");
    }

   @GET
    @Path("user/me")
    @Authenticated
    public String me(@Context SecurityContext sc) {
        return sc.getUserPrincipal().getName();
    }

}