package main

import (
	"context"

	"github.com/lucheng0127/virtuallan/pkg/cli"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) shutdown(ctx context.Context) {}

type SubmitParams struct {
	Target   string `json:"target"`
	Username string `json:"username"`
	Password string `json:"password"`
	Key      string `json:"key"`
	LogLevel string `json:"log_level"`
}

// Submit returns a greeting for the given info
func (a *App) Submit(sp SubmitParams) string {
	if err := cli.RunClient(
		cli.SetClientTarget(sp.Target),
		cli.SetClientUser(sp.Username),
		cli.SetClientPasswd(sp.Password),
		cli.SetClientKey(sp.Key),
		cli.SetClientLogLevel(sp.LogLevel),
	); err != nil {
		panic(err)
	}

	return "ok"
}
