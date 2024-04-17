import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class Billettkontroller {

    private List<Billett> billettliste = new ArrayList<>();

    @PostMapping("/billetter")
    public void kjopBillett(@RequestBody Billett billett) {
        billettliste.add(billett);
    }

    @GetMapping("/billetter")
    public List<Billett> hentAlleBilletter() {
        return billettliste;
    }

    @DeleteMapping("/billetter")
    public void slettAlleBilletter() {
        billettliste.clear();
    }
}
