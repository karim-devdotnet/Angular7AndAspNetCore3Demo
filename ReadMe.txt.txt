Angular:
>npm install/init
>npm install -g @angular/cli

Create Project
>ng new MyAngularProject (--skip-tests)

Open Project in VS Code
MyAngularProject> code .

Open Project in Chrome
MyAngularProject>ng serve -o


Add new component
MyAngularProject>ng generate component login

Add new service
MyAngularProject>ng generate service login

install paket
MyAngularProject> npm install bootstrap

add class model
MyAngularProject> ng generate class book --type=model

- Database First (scaffolding)
pm> dotnet ef dbcontext scaffold "server=.\sqlexpress; database=BooksDB; User ID=sa;Password=sa;MultipleActiveResultSets=True" Microsoft.EntityFrameworkCore.SqlServer -o Models