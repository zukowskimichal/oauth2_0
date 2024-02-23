package pl.ssc.resource_server;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class ResourceController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "Public endpoint";
    }

    @GetMapping("/user")
    public String userEndpoint() {
        return "User endpoint";
    }

    @GetMapping("/admin")
    public String adminEndpoint() {
        return "Admin endpoint";
    }
}
