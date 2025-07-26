import { Briefcase, Code, GraduationCapIcon, LucideSchool, LucideSchool2, ScaleIcon, School, School2, SchoolIcon, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Python & Machine Learning Developer
            </h3>

            <p className="text-muted-foreground">
              I am a passionate student at Mohan Babu University, 
              currently honing my programming skills with a focus on Python. 
              I enjoy solving algorithmic challenges and learning new problem-solving techniques through LeetCode.
            </p>

            <p className="text-muted-foreground">
              I love solving real-world problems using technology, 
              from predictive models to interactive web apps. My expertise includes Python, 
              TensorFlow, NLP, and Generative AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1rV5kCLqqozvEiVDyajmRA0Wwm0IuXBqV/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-1 card-hover">
              <div className="flex items-start gap-4">
                
                  
                </div>
                <div className="text-center">
                  
                  <h3 className="text-4xl font-semibold mb-4"> Education</h3>
                  
                    
                </div>
              </div>
            
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SchoolIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">10th (SSC)</h4>
                  <p className="text-muted-foreground">
                    
                    Sri Chaitanya College, Chittoor (2020)                                           
                    
                  </p>
                  <p className="text-muted-foreground"> 
                     Score: 522/600 (87%)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  < LucideSchool2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Intermediate (12th)</h4>
                  <p className="text-muted-foreground">
                    
                    Sri Chaitanya College, Tirupati (2020-2022)
                    Score: 701/1000 (70%)
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCapIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">B.Tech(CSE)</h4>
                  <p className="text-muted-foreground">

                   Mohan Babu University, Tirupati (2022-2026)
                    CGPA: 8.5 (Current)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};