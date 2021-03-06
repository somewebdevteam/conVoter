package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import play.data.format.Formats;
import play.data.validation.Constraints;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by Antoni Bertel on 17.10.2014.
 */
@Entity
public class Competition extends Model {

    public Competition(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Id
    @GeneratedValue
    public Long id;

    @Constraints.MaxLength(30)
    public String name;

    @Constraints.MaxLength(300)
    public String description;

    @Formats.DateTime(pattern = "dd/MM/yyyy")
    public Date startDate = new Date();

    @Formats.DateTime(pattern = "dd/MM/yyyy")
    public Date endDate = new Date();

    @ManyToMany(mappedBy = "competitions")
    @JsonBackReference
    public List<Jury> vouters;

    @OneToMany(mappedBy = "competition", cascade = CascadeType.ALL)
    @JsonBackReference
    public List<Project> projects;

    public static Finder<Long, Competition> find = new Finder<Long, Competition>(
            Long.class, Competition.class
    );
}
